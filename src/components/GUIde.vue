  <template>
  <div class="ui-guide">
    <svg width="100%" height="100%" id="innerbox" preserveAspectRatio="none" class="mask">
      <defs>
        <mask id="hole">
          <rect width="100%" height="100%" fill="white" />
          <rect
            :x="focusX"
            :y="focusY"
            :width="focusWidth"
            :height="focusHeight"
            fill="black"
            class="mask-agent"
          />
        </mask>
      </defs>
      <rect fill="rgba(0,0,0,0.4)" width="100%" height="100%" mask="url(#hole)" />
    </svg>
    <div class="content-area">
      <div
        class="content-box"
        v-if="this.currentElement"
        ref="contentBox"
        :style="{top:contentBoxPosition.top + 'px',left:contentBoxPosition.left + 'px'}"
        :class="{contentBox:true}"
      >
        <div
          class="arrow"
          :class="[arrow]"
          :style="{top:arrowTop() + 'px', left:arrowLeft() +'px'}"
        ></div>
        <div class="box-header">
          <h4>{{this.currentElement.data.heading}}</h4>
          <span class="small">step {{step}}/{{maxStep}}</span>
        </div>
        <div class="box-body">
          <p>{{this.currentElement.data.content}}</p>
        </div>
        <div class="box-footer">
          <span class="small">
            <a @click="exitGuide()">Skip these tips</a>
          </span>
          <Button text="next" @click.native="nextStep()" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.ui-guide {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mask {
  z-index: 10000;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.content-area {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10001;

  .content-box {
    background: #fff;
    position: absolute;
    transition: all 0.5s ease;
    padding: 1rem;
    border-radius: 16px;
    max-width: 100%;
    width: 360px;
    pointer-events: visible;
    max-width: calc(100% - 2rem);
    box-shadow: 0px 0px 15px #0000002e;
    .arrow {
      $arrowSize: 8px;
      &.top {
        width: 0;
        height: 0;
        border-top: $arrowSize solid transparent;
        border-bottom: $arrowSize solid #fff;
        border-right: $arrowSize solid transparent;
        border-left: $arrowSize solid transparent;
        position: absolute;
        left: 32px;
        top: -$arrowSize * 2;
      }
      &.left {
        width: 0;
        height: 0;
        border-top: $arrowSize solid transparent;
        border-bottom: $arrowSize solid transparent;
        border-right: $arrowSize solid #fff;
        position: absolute;
        left: -$arrowSize;
        top: 16px;
      }
      &.bottom {
        width: 0;
        height: 0;
        border-top: $arrowSize solid #fff;
        border-right: $arrowSize solid transparent;
        border-left: $arrowSize solid transparent;
        position: absolute;
        left: 32px;
        bottom: -$arrowSize;
      }
    }
    .box-header,
    .box-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h4 {
      font-weight: 500;
    }
    .small {
      font-size: 0.75rem;
    }
    .box-body {
      margin-top: 0.5rem;
    }
    .box-footer {
      margin-top: 0.5rem;
    }
  }
}
.mask-agent,
.content-box,
.arrow {
  transition: all 0.5s ease;
}
.keep-button[data-v-015de462] {
  padding: 0.5rem 1rem;
}
</style>

<script>
import { get, sync } from "vuex-pathify";
import Button from "@/components/Button.vue";

export default {
  name: "GUIde",
  components: { Button },
  props: {},
  data: function () {
    return {
      focusX: 0,
      focusY: 0,
      focusWidth: 0,
      focusHeight: 0,
      contentBoxPosition: { top: 0, left: 0, y: 0, x: 0, height: 0, width: 0 },
      arrow: "left",
      isScrolling: false,
    };
  },
  computed: {
    elements: get("gUIdeElements"),
    isActive: sync("gUIdeActive"),
    mobileSidebarActive: sync("mobileSidebarActive"),
    step: sync("gUIdeStep"),
    maxStep() {
      return this.elements.length;
    },
    currentElement() {
      return this.elements[this.step - 1];
    },
    currentDimensions() {
      return (
        this.currentElement &&
        this.currentElement.element.getBoundingClientRect()
      );
    },
  },
  methods: {
    arrowTop() {
      if (this.arrow === "top") return -16;
      if (this.arrow === "bottom") return this.contentBoxPosition.height;
      return this.focusY - this.contentBoxPosition.top + 16;
    },
    arrowLeft() {
      if (this.arrow === "left") return null;
      const innerLeft = this.focusX - this.contentBoxPosition.left;

      if (innerLeft < 0) return null;
      if (innerLeft > this.contentBoxPosition.width) return null;

      return innerLeft;
    },
    exitGuide() {
      this.isActive = false;
    },
    checkNext(nextStep) {
      const element = this.elements[nextStep - 1];
      let delay = false;
      if (element) {
        const offset = this.checkPosition(element.element);
        element.element.parentElement.scroll({
          top: -offset,
          behavior: "smooth",
        });
        if (offset < 0) delay = true;
      }
      return delay;
    },
    checkPosition(element) {
      const offset = element.parentElement.offsetHeight - element.offsetTop;
      return offset;
    },
    nextStep() {
      this.currentElement.data.action && this.currentElement.data.action();
      let delay = this.currentElement.data.delay || 0;

      if (this.checkNext(this.step + 1)) delay = 300;

      setTimeout(() => {
        if (this.step < this.maxStep) {
          this.step++;
          this.move();
        } else {
          this.exitGuide();
          setTimeout(() => (this.mobileSidebarActive = false), 500);
        }
      }, delay);
    },
    calcContentBoxPosition() {
      if (!this.currentDimensions) return;
      const margin = 16;
      this.arrow = "left  ";
      let { x, y, width, height } = this.currentDimensions;
      const { innerHeight, innerWidth } = window;
      let left = x + width + margin;
      let top = y;

      if (this.$refs.contentBox) {
        const {
          width: boxWidth,
          height: boxHeight,
        } = this.$refs.contentBox.getBoundingClientRect();

        this.contentBoxPosition.width = boxWidth;
        this.contentBoxPosition.height = boxHeight;

        if (top + boxHeight > innerHeight)
          top = innerHeight - boxHeight - margin;

        if (left + boxWidth > innerWidth) {
          this.arrow = "top";
          left = x - margin < margin ? x + margin : x - margin;
          top = y + height + margin;
          if (top + boxHeight > innerHeight) {
            top = y - boxHeight - margin;
            this.arrow = "bottom";
          }
          if (top < 0) top = 0 + margin;
          if (top + boxHeight > innerHeight)
            top = innerHeight - boxHeight - margin;

          if (x + boxWidth > innerWidth) left = innerWidth - boxWidth - margin;
        }
        if (left < 0) left = 0;
      }

      this.contentBoxPosition.top = top;
      this.contentBoxPosition.left = left;

      this.contentBoxPosition.y = y;
      this.contentBoxPosition.x = x;
    },
    move() {
      if (!this.currentDimensions) return;

      this.$nextTick(() => {
        this.isScrolling = false;
        this.calcContentBoxPosition();
        const { x, y, width, height } = this.currentDimensions;
        this.focusX = x;
        this.focusY = y;
        this.focusWidth = width;
        this.focusHeight = height;
      });
    },
  },
  watch: {
    elements: {
      deep: false,
      handler() {
        this.move();
      },
    },
  },
  created() {
    this.move();
  },
  updated() {},
  mounted() {
    this.$nextTick(() => {
      this.move();
    });
    window.addEventListener("resize", () => {
      this.move();
    });
  },
};
</script>