<template>
  <div>
    <div v-if="$store.state.currentRole" class="categories">
      <div
        v-for="(category) in currentCategories"
        :key="category.id"
        class="category-wrapper"
        :id="'category-'+category.id"
        ref="category"
        :data-id="category.id"
      >
        <h3 class="title">{{ category.categoryTitle }}</h3>
        <div class="category">
          <div class="category-inner tile is-ancestor">
            <Keepcard  v-for="card in category.cards" :key="card" :card="card" :pData="Object.assign({}, getDataByID(card))" />
            <div
              v-if="!category.cards.length"
            >There are no cards in this category for this product and role</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import Keepcard from "@/components/Keepcard.vue";

import { get, sync } from "vuex-pathify";

export default {
  name: "Cardlisting",
  components: {
    Keepcard,
  },

  data: function () {
    return {
      offset: 54,
      mobileBreakpoint: 768,
    };
  },

  methods: {
    getDataByID(categoryId) {
      let data;
      
      switch(categoryId) {
        case 0:
         data = this.productData.d21
          break;
        case 1:
          data =  this.productData.d1
          break;
        case 2:
          data = this.productData.d2
          break;
        case 3:
          data = this.productData.d3
          break;
        case 4:
          data = this.productData.d4
          break;
        case 5:
          data = this.productData.d5
          break;
        case 6:
          data = this.productData.d6
          break;
        case 7:
          data = this.productData.d7
          break;
        case 8:
          data = this.productData.d8
          break;
        case 9:
          data = this.productData.d9
          break;
        case 10:
          data = this.productData.d10
          break;
        case 11:
          data = this.productData.d11
          break;
        case 12:
          data = this.productData.d12
          break;
        case 13:
          data = this.productData.d13
          break;
        case 14:
          data = this.productData.d14
          break;
        case 15:
          data = this.productData.d15
          break;
        case 16:
          data = this.productData.d16
          break;
        case 17:
          data = this.productData.d17
          break;
        case 18:
          data = this.productData.d18
          break;
        case 19:
          data = this.productData.d19
          break;
        case 20:
          data = this.productData.d20
          break;
        case 21:
          data = this.productData
          break;
        case 22:
          data = this.productData.d22
          break;
        case 23:
          data = this.productData.d23
          break;
        case 24:
          data = this.productData.d24
          break;
        case 25:
          data = this.productData.d25
          break;
        case 26:
          data = this.productData.d26
          break;
        
        default:
      }
    return data;
    },
    scrollEvent() {
      this.$refs.category.forEach((cat) => {
        if (this.isActiveElement(cat)) {
          const catId = cat.getAttribute("data-id");
          this.currentCategory = catId;
        }
      });
    },
    isActiveElement(element) {
      const box = element.getBoundingClientRect();
      const topVal = box.top;
      const margin =
        window.innerWidth < this.mobileBreakpoint ? this.offset : 0;
      if (topVal < 0 + margin && topVal > -box.height + margin) {
        return true;
      }
      return false;
    },
  },
  watch: {
    currentCategory(newCat) {
      const anchor = document.getElementById("category-" + newCat);
      const rectAnchor = anchor.getBoundingClientRect();

      if (!this.isActiveElement(anchor)) {
        const margin =
          window.innerWidth < this.mobileBreakpoint ? this.offset : 0;
        const scroll = window.scrollY + rectAnchor.top - margin;
        window.scroll({ top: scroll, behavior: "smooth" });
      }
    },
  },

  computed: {
    roles() {
      return this.$store.state.roles;
    },
    products: get("products"),
    currentRole: get("currentRole"),
    currentCategory: sync("currentCategory"),
    currentCategoryData() {
      return this.$store.state.roles[this.currentRole].categories.find(
        (cat) => cat.id === this.currentCategory
      );
    },
    currentCategories() {
      return this.$store.state.roles[this.currentRole].categories.filter(
        (cat) => cat.cards.length > 0
      );
    },
    displayCategory() {
      return this.$store.state.roles[this.$store.state.currentRole].categories[
        this.$store.state.currentCategory
      ].categoryTitle;
    },
    productData() {
      let currentProduct = this.$store.state.currentProduct;
      return this.$store.state.products[currentProduct].data;
    }
  },
  created() {
    if (!this.currentRole) this.$router.push({ path: "/" });
    window.addEventListener("scroll", (e) => {
    });
  },

  destroyed() {
    window.removeEventListener("scroll", (e) => {
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";

.categories {
  padding: 16px 24px 24px 24px;
  position: relative;
  padding-bottom: 100vh;
  transform-style: preserve-3d;
}

li {
  margin-bottom: 16px;
}
.title {
  position: sticky;
  padding-top: 0.5rem;
  top: 0px;
  z-index: 20;
  font-size: 1.5rem;
  transform: translate3d(0, 0, 0px);
  &:before {
    display: block;
    height: 2.25em;
    width: calc(100% + 48px);
    content: "";
    z-index: -1;
    background: rgba($background, 0.9);
    position: absolute;
    left: -24px;
    top: 0;
    backdrop-filter: blur(3px);
  }
}
.category {
  margin-bottom: 2rem;
  padding-top: 12px;
}
.tile.is-ancestor {
  flex-wrap: wrap;
}
</style>
