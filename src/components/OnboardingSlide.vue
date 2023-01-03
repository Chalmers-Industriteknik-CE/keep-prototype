<template>
  <div class="onboarding-slide">
    <div>
      <img :src="imageSrc(image)" />
    </div>
    <h2 class="title">{{heading}}</h2>
    <p>{{description}}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
h2.title {
  font-family: "Domine", serif;
  font-weight: 400;
  font-size: 2em;
  color: $text-primary;
}
.onboarding-slide {
  text-align: center;
}
p {
  max-width: 450px;
  margin: 16px auto 32px;
}
img {
  max-height: 30vh;
}
@media screen and (max-width: $mobileMenuBreakpoint) {
  h2.title {
    font-size: 1.5em;
    color: $text-primary;
  }
}
</style>

<script>
import { get } from "vuex-pathify";

export default {
  name: "OnboardingSlide",
  components: {},
  props: { heading: String, description: String, image: String },
  data() {
    return {
      step: 0,
    };
  },
  computed: {},
  methods: {
    imageSrc(image) {
      return require(`@/assets/illustrations/onboarding/${image}`);
    },
  },
};
</script>
