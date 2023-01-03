<template>
  <div class="body">
    <section class="hero">
      <Button
        text="Prototype"
        type="is-primary"
        @click.native="isOnboardingModalActive = !isOnboardingModalActive"
        icon="!forward"
      />
    </section>
  </div>
</template>

<script>
import { sync } from "vuex-pathify";
import Button from "@/components/Button.vue";

export default {
  name: "StartPage",
  components: { Button },
  data() {
    return {};
  },
  mounted() {
    this.isOnboardingModalActive = true;
  },  
  methods: {
    jumpToAnchor(anchor) {
      window.location.href = "#" + anchor;
    },
    navigateTo(location) {
      this.$router.push({
        name: location,
      });
    },
  },
  computed: {
    isOnboardingModalActive: sync("isOnboardingModalActive"),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.body {
  background-color: $background;
}

section {
  padding: 2rem;
}

.keep-button {
  margin: 0 auto;
  display: block;
}
</style>
