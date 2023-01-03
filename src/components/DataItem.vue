  <template>
  <div class="data-item">
    <div class="data-label">{{label}}</div>
    <div class="text-body">
      <div v-if="data === null || data === undefined">N/A</div>
      <slot v-else></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.data-item {
  clear: both;
  margin-bottom: 1.5rem;
}
.data-label {
  text-transform: uppercase;
  font-family: acumin-pro, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: $text-secondary;
  margin-bottom: 0.25rem;
}
</style>

<script>
import { get, sync } from "vuex-pathify";

export default {
  name: "DataItem",
  components: {},
  props: {
    label: String,
    data: { type: [String, Number, Boolean, Array], default: null },
  },
  data: function () {
    return {};
  },
  methods: {},
  computed: {},
};
</script>