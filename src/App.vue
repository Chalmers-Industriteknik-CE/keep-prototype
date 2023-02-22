<template>
  <div id="app">
<!--    <GUIde v-if="gUIdeActive" />-->
    <router-view></router-view>

    <b-modal
      :active.sync="isOnboardingModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
      class="onboarding-modal-wrapper"
    >
      <Onboarding />
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import Onboarding from "@/components/Onboarding.vue";
import GUIde from "@/components/GUIde.vue";

import { sync, get } from "vuex-pathify";

Vue.use(Vuex);

export default {
  name: "App",
  components: {
    // GUIde,
    Onboarding,
  },
  data: function () {
    return {};
  },
  methods: {},
  computed: {
    isOnboardingModalActive: sync("isOnboardingModalActive"),
    gUIdeActive: get("gUIdeActive"),
  },
};
</script>

<style lang="scss">
@import "@/scss/global.scss";

#app {
  display: flex;
  flex-flow: column;
  font-family: acumin-pro, sans-serif;
  font-size: 16px;
  line-height: 19px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: $background;
}

.navlinks {
  margin-bottom: 24px;
}
@media screen and (max-width: $mobileMenuBreakpoint) {
  .onboarding-modal-wrapper {
    .modal-close {
      &:before {
        background-color: $text-primary;
      }
      &:after {
        background-color: $text-primary;
      }
    }
  }
}
</style>
