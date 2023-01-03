<template>
  <b-navbar transparent>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/keep-logo.png" alt="keep-logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/benefits' }"
        >Why KEEP?</b-navbar-item
      >
      <b-navbar-item tag="router-link" :to="{ path: '/#partners' }"
        >Partners</b-navbar-item
      >
      <b-navbar-item tag="router-link" :to="{ path: '/#contact' }"
        >Get in Touch</b-navbar-item
      >
    </template>

    <template slot="end">
      <div class="keep-buttons">
        <b-navbar-item tag="router-link" :to="{ path: '/#contact' }">
          <Button
            text="Join KEEP"
            icon="!forward"
            type="is-secondary"
            class="topbar-button"
          />
        </b-navbar-item>
        <b-navbar-item @click="isOnboardingModalActive = true">
          <Button text="Try Prototype" icon="!forward" class="topbar-button" />
        </b-navbar-item>
      </div>
    </template>
  </b-navbar>
</template>

<script>
import { sync } from "vuex-pathify";
import Button from "@/components/Button.vue";

export default {
  name: "NavbarStart",
  components: { Button },
  props: {},
  computed: {
    isOnboardingModalActive: sync("isOnboardingModalActive"),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.topbar-button {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}
nav.navbar {
  background-color: $background;
  padding: 0 1rem;
}

.navbar-item img {
  max-height: 1.3rem;
}

.button {
  font-family: acumin-pro, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: $button-primary;
  color: white;
  border: none;
  border-radius: 3rem;
  padding: 0 1.3rem;
  &:hover {
    background-color: $button-primary-hover;
    color: white;
  }
}

.button.secondary {
  font-family: acumin-pro, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: transparent;
  color: $text-primary;
  border: solid 1px;
  border-color: $text-primary;
  border-radius: 3rem;
  padding: 0 1.3rem;
  &:hover {
    background-color: $button-secondary-hover;
    color: $text-primary;
  }
}
.keep-buttons {
  display: flex;
  width: 100%;
  flex-flow: wrap;
  justify-content: space-between;
}
</style>
