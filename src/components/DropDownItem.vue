  <template>
  <div class="dropdown-item">
    <img v-if="item.image" :src="item.image" />
    <div>
      <label>{{ item.title }}</label>
      <div v-if="item.subTitle">{{ item.subTitle }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.dropdown-item {
  display: flex;
  padding: 0.5rem 0.5rem;
  align-items: center;
  width: 100%;
  img {
    max-width: 48px;
    margin-right: 1rem;
  }
}
@media screen and (max-width: $mobileMenuBreakpoint) {
  .dropdown-item {
    padding: 0rem 0.5rem;
    img {
      max-width: 32px;
    }
  }
}
</style>

<script>
import { get, sync } from "vuex-pathify";

export default {
  name: "DropdownItem",
  components: {},
  props: {
    item: Object,
  },
  data: function () {
    return {};
  },

  methods: {
    imageSrc(image) {
      return require(`@/assets/products/${image}`);
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