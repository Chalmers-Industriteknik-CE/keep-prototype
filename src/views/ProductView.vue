<template>
  <div class="product-view" v-bind:class=" manufacturerId ">
    
    <div class="inner">
      <div class="mobile-navbar">
        <Navbar />
      </div>
      <aside class="menu" :class="{ hidden: !mobileSidebarActive }">
        <div class="menu-bg" @click="menuClick($event)"></div>
        <div class="menu-inner">
          <div class="item keep-logo">
            <router-link :to="{ path: '/' }">
              <img src="@/assets/keep-logo.png" alt="keep-logo" />
            </router-link>
            <a :href="'https://github.com/Chalmers-Industriteknik-CE/keep-prototype'" target="_blank">
              <img src="@/assets/logos/github-mark.svg" alt="github" />
            </a>
          </div>
          <div
            class="item"
            v-gUIde="{
              heading: 'Switch between products',
              content: 'KEEP is applicable to many electronic products.',
              step: 1,
            }"
          >
            <ProductDropdown />
          </div>
          <div class="item menu-wrapper" ref="scrollMenu">
            <CategoryMenu
              v-gUIde="{
                heading: 'Find the information you want',
                content:
                  'Use these categories to navigate between the product information.',
                step: 2,
              }"
            />
            <div
              class="qr-link"
              @click="toggleQR()"
              v-gUIde="{
                heading: 'Share this  product',
                content:
                  'click here to access the unique QR-code for this product',
                step: 3,
              }"
            >
              <Button
                text="Show QR"
                icon="!qrcode"
                iconPosition="left"
                size="is-small"
              />
            </div>
          </div>
          <div
            class="item"
            v-gUIde="{
              heading: 'Change role',
              content:
                'Different users have access to different types of information. Switch role to explore what other users can see.',
              step: 3,
              delay: 700,
              action: scrollTop,
            }"
          >
            <RoleDropdown position="top" />
          </div>
        </div>
      </aside>
      <div class="cards">
        <Cardlisting />
      </div>
      <b-modal
        :active.sync="showqr"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal
      >
        <QrComponent :usn="usn" :link="getProductQrLink()" />
      </b-modal>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Cardlisting from "@/components/Cardlisting.vue";
import CategoryMenu from "@/components/CategoryMenu.vue";
import ProductDropdown from "@/components/ProductDropdown.vue";
import RoleDropdown from "@/components/RoleDropdown.vue";
import QrComponent from "@/components/QrComponent.vue";
import Button from "@/components/Button.vue";
import { get, sync } from "vuex-pathify";

export default {
  name: "ProductView",
  components: {
    Navbar,
    Cardlisting,
    CategoryMenu,
    ProductDropdown,
    RoleDropdown,
    QrComponent,
    Button,
  },

  data: function () {
    return { showqr: false };
  },

  methods: {
    toggleQR() {
      this.showqr = !this.showqr;
    },
    menuClick(event) {
      this.mobileSidebarActive = false;
    },
    getProductQrLink() {
      return `product/${this.currentProduct}`;
    },
    scrollTop() {
      this.mobileSidebarActive = false;
      window.scroll({ top: 0, behavior: "smooth" });
    },
  },
  computed: {
    roles() {
      return this.$store.state.roles;
    },
    product() {
      return this.$store.state.products[this.currentProduct];
    },
    manufacturerId(){
      return this.product.manufacturerId;
    },
    usn(){
      return this.product.data.usn;
    },
    gUIdeActive: sync("gUIdeActive"),
    currentCategory: sync("currentCategory"),
    currentRole: get("currentRole"),
    mobileSidebarActive: sync("mobileSidebarActive"),
    isOnboardingModalActive: sync("isOnboardingModalActive"),
    currentProduct: sync("currentProduct"),
    displayCategory() {
      return this.$store.state.roles[this.$store.state.currentRole].categories[
        this.$store.state.currentCategory
      ].categoryTitle;
    },
  },
  watch: {
    product() {
      window.scroll({ top: 0, behavior: "smooth" });
    },
  },
  created() {
    if (!this.currentRole) this.$router.push({ path: "/" });
    this.$store.dispatch("fetchProducts", this.$route.params.id)
    this.currentProduct = 0;
    if (!this.product) this.$router.push({ path: "/" });
    if (!this.isOnboardingModalActive) this.gUIdeActive = true;
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";

.mobile-navbar {
  display: none;
}
.keep-logo {
  height: 54px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  
  img {
    max-height: 1.3rem;
  }
}
.cards {
  background: $background;

  margin-left: 300px;
  padding: 0;
}
.inner {
  position: relative;
  
}
  
.menu {
  background: #fff;
  width: 300px;
  flex-basis: 300px;
  flex-grow: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding-bottom: 0;
  position: fixed;
  top: 0;
  height: calc(var(--vh) * 100);
  .menu-inner {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
}
.menu-wrapper {
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
}
.item {
  width: 100%;
  border-bottom: 2px solid #eee;
}
.columns.inner {
  flex: 1;
  margin-bottom: 0;
}
.qr-link {
  display: flex;
  justify-content: center;
  padding: 0.5rem;
}
@media screen and (max-width: $mobileMenuBreakpoint) {
  .mobile-navbar {
    display: block;
    position: fixed;
    top: 0;
    width: 100%;
    height: $navHeight;
    z-index: 1000;
  }
  .keep-logo {
    display: none;
  }
  .cards {
    margin-left: 0;
  }
  .menu-wrapper {
    overflow-y: scroll;
  }
  .menu.hidden {
    left: -100%;

    .menu-bg {
      opacity: 0;
      pointer-events: none;
    }
  }

  .menu {
    width: 75%;
    max-width: 300px;

    position: fixed;
    z-index: 29;
    top: $navHeight;
    left: 0;
    transition: left 0.7s ease;
    height: calc(var(--vh) * 100 - #{$navHeight});
    .menu-inner {
      position: relative;
      z-index: 1;
      background: #fff;
      height: 100%;
      .menu-list a {
        padding: 0.5em 1.5em;
      }
    }
    .menu-bg {
      transition: all 0.5s ease;

      content: "";
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: calc(var(--vh) * 100);
      background: #000;
      z-index: 0;
      opacity: 0.35;
    }
  }
}
</style>
