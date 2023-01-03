<template>
  <b-navbar :mobile-burger="false">
    <template slot="brand">
      <div
        id="menu-toggle"
        class="navbar-item"
        @click="toggleMenu()"
        v-gUIde="{heading:'Menu',content:'Quick access to page sections and other configurations.',step:1, action:toggleMenu, delay:700}"
      >
        <span v-if="!showMenu" class="fs-keep-icon-regular">!burger</span>
        <span v-if="showMenu" class="fs-keep-icon-regular">!close</span>
      </div>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/keep-logo.png" alt="keep-logo" />
      </b-navbar-item>
    </template>
    <template slot="burger"></template>
    <template slot="end">
    </template>
  </b-navbar>
</template>

<script>
import { get, sync } from "vuex-pathify";

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      role: "",
      isActive: true,
      showMenu: false,
      showqr: false,
    };
  },
  methods: {
    changeRole: function (newRole) {
      this.$store.commit("SET_ROLE", newRole);
      this.$store.commit("SET_CATEGORY", 0);
    },
    changeCategory: function (newCategory) {
      this.$store.commit("SET_CATEGORY", newCategory);
    },
    toggleMenu() {
      this.mobileSidebarActive = !this.mobileSidebarActive;
    },
  },
  computed: {
    mobileSidebarActive: sync("mobileSidebarActive"),
    roles() {
      return this.$store.state.roles;
    },
    displayRole() {
      return this.$store.state.roles[this.$store.state.currentRole].title;
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/global.scss";
nav.navbar {
  background-color: #fff;
  padding: 0 1rem;
  border-bottom: 2px solid $background;
  .navbar-brand {
    justify-content: center;
  }
}

.navbar-item img {
  max-height: 1.3rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navlinks {
  margin-bottom: 24px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-50vh);
  opacity: 0;
}
#menu-toggle {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  color: #000;
  cursor: pointer;
}
@media screen and (min-width: $mobileMenuBreakpoint) {
  #menu-toggle {
    display: none;
  }
  .navbar-brand {
    justify-content: flex-start;
  }
}
</style>
