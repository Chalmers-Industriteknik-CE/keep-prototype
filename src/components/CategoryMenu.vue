  <template>
  <div class="category-menu-wrapper">
    <b-menu class="category-menu">
      <b-menu-list>
        <b-menu-item
          v-for="category in categories"
          :key="category.categoryTitle"
          @click="changeCategory(category.id)"
          :active="category.id == currentCategory"
        >
          <span slot="label" class="category-title">
            <span class="fs-keep-icon-regular">{{category.categoryIcon}}</span>
            {{category.categoryTitle}}
          </span>
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.menu.category-menu {
  span.category-title {
    margin-left: 0.5rem;
    .fs-keep-icon-regular {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
  ::v-deep .menu-list a {
    border-radius: 2px;
    display: block;
    font-weight: 400;
    color: #000;
    &.is-active {
      color: $primary;
    }
  }
}
</style>
<style >
.category-menu-wrapper {
  flex: 1;
}
</style>
<script>
import { get, sync } from "vuex-pathify";

export default {
  name: "CategoryMenu",
  components: {},

  data: function () {
    return {};
  },

  methods: {
    changeCategory: function (newCategory) {
      this.$store.commit("SET_CATEGORY", newCategory);
      this.mobileSidebarActive = false;
    },
  },

  computed: {
    currentRole: get("currentRole"),
    currentCategory: get("currentCategory"),
    mobileSidebarActive: sync("mobileSidebarActive"),
    categories() {
      return this.$store.state.roles[this.currentRole].categories.filter(
        (cat) => cat.cards.length > 0
      );
    },
  },
};
</script>