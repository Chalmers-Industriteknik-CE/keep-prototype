  <template>
  <div class="keep-dropdown">
    <b-dropdown
      aria-role="list"
      animation="fade"
      :position="position === 'top' ? 'is-top-left' : 'is-bottom-left'"
      :class="position"
    >
      <div slot="trigger" class="trigger" slot-scope="{ active }">
        <DropDownItem :item="selectedItem" />
        <span class="fs-keep-icon-regular icon">
          <span v-if="active">!chevron_up</span>
          <span v-else>!chevron_down</span>
        </span>
      </div>

      <b-dropdown-item
        aria-role="listitem"
        v-for="(item) in items"
        :key="item.key"
        @click="change(item)"
      >
        <DropDownItem :item="item" />
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<style lang="scss">
@import "@/scss/global.scss";

.top {
  .dropdown-content {
    box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.1);
  }
}
.bottom {
  .dropdown-content {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
}
.keep-dropdown {
  cursor: pointer;
  .dropdown-trigger {
    width: 100%;
  }
  .trigger {
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
    label {
      font-weight: 600;
    }
    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
      margin-right: 1rem;
    }
    .icon {
      margin-left: 1rem;
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
  .dropdown {
    width: 100%;
    right: 0;
    .dropdown-menu {
      width: 100%;
      padding-top: 0;

      .dropdown-content {
        border-radius: 0;
        border: none;
      }
    }
  }

  @media screen and (max-width: $mobileMenuBreakpoint) {
    .dropdown.is-mobile-modal > .dropdown-menu {
      position: fixed !important;
      width: calc(100vw - 40px);
      max-width: 460px;
      max-height: calc(100vh - 120px);
      top: 50% !important;
      left: 50% !important;
      bottom: auto !important;
      right: auto !important;
      transform: translate3d(-50%, -50%, 0);
      white-space: normal;
      overflow-y: auto;
      z-index: 50 !important;
    }

    .dropdown {
      .dropdown-menu {
        width: calc(100% - 16px);
      }
    }
  }
}
</style>

<script>
import { get, sync } from "vuex-pathify";
import DropDownItem from "@/components/DropDownItem.vue";

export default {
  name: "Dropdown",
  components: { DropDownItem },
  props: {
    items: Array,
    selectedItem: Object,
    position: {
      type: String,
      default: "bottom",
    },
  },
  data: function () {
    return {};
  },

  methods: {
    imageSrc(image) {
      return require(`@/assets/products/${image}`);
    },
    change(item) {
      this.$emit("change", item);
    },
  },
  computed: {
    currentRole: get("currentRole"),
    currentProductId: get("currentProduct"),
    products: get("products"),
    currentProduct() {
      return this.$store.state.products[this.currentProductId];
    },
    categories() {
      return this.$store.state.roles[this.currentRole];
    },
  },
};
</script>