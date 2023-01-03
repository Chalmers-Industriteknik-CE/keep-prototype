<template>
  <div>
    <b-carousel
      v-if="onboardingdata[role]"
      :autoplay="false"
      :repeat="false"
      :arrow="false"
      :indicator-inside="false"
      v-model="currentStep"
    >
      <b-carousel-item v-for="(data, key) in onboardingdata[role]" :key="key">
        <OnboardingSlide
          :heading="data.heading"
          :description="data.description"
          :image="data.image"
        />
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
</style>

<style>
.carousel .carousel-indicator .indicator-item .indicator-style {
  border: none;
  background: #d7d9db;
}
</style>
<script>
import OnboardingSlide from "./OnboardingSlide.vue";
import { get } from "vuex-pathify";

export default {
  name: "OnboardingSlides",
  components: { OnboardingSlide },
  props: { role: String, step: Number },
  data() {
    return {
      currentStep: 0,
      onboardingdata: {
        consumer: [
          {
            heading: "Buy great products!",
            description:
              "KEEP helps consumers to compare and select products based on performance and environmental impact.",
            image: "Users1.png",
          },
          {
            heading: "Feel safe when buying used",
            description:
              "Check the product history when buying used to make sure that your getting the real deal.",
            image: "Users2.png",
          },
          {
            heading: "Products in it for the long run",
            description:
              "Easy access to repair guides makes it easier to repair broken products and thus extend their lifetime. ",
            image: "Users3.png",
          },
          {
            heading: "No more products in the drawer",
            description:
              "Get information about what to do with the products you don’t use anymore.",
            image: "Users4.png",
          },
        ],
        producer: [
          {
            heading: "Every product has a story to tell",
            description:
              "KEEP helps your brand tell the story of where your products has been, how they are made and how they are used. ",
            image: "Producer1.png",
          },
          {
            heading: "More information, better products",
            description:
              "Get information about the lifetime of your products and what parts break first. Use this information to develop better products.",
            image: "Producer2.png",
          },
          {
            heading: "Makes you a winner!",
            description:
              "Easier access to product information means less work and increased chanses of winning tenders.",
            image: "Producer3.png",
          },
          {
            heading: "Let’s get circular!",
            description:
              "KEEP can ease the implementation of take back systems. So you can make new products from your old ones.",
            image: "Producer4.png",
          },
        ],
        certifier: [
          {
            heading: "Increased brand recognition",
            description:
              "With KEEP, your certifications can reach new customers and help them make the right choice when buying products.",
            image: "Certifier1.png",
          },
          {
            heading: "Extended certification criterias",
            description:
              "With easier access to data the certification criterias could be extended resulting in even better certifications.",
            image: "Certifier2.png",
          },
        ],
        support: [
          {
            heading: "Check the service history and update it",
            description:
              "Access the service history of a product and update it with new information when it has been serviced.",
            image: "Service1_Remanufacturing2.png",
          },
          {
            heading: "Access warranty information",
            description: "Quickly check if the product is covered by warranty.",
            image: "Service2.png",
          },
        ],
        remanufacturer: [
          {
            heading: "Find high value products and components",
            description:
              "KEEP gives you easy access to information about products and components so you can find those with high value.",
            image: "Remanufacturing1.png",
          },
          {
            heading: "Repair and disassembly guides",
            description:
              "Speed up the repair and disassembly with guides showing you how it’s done.",
            image: "Service1_Remanufacturing2.png",
          },
        ],
        materialrecycler: [
          {
            heading: "Sort out products with dangerous content",
            description:
              "Quickly sort out the products containing dangerous contens in need of special care.",
            image: "Recycler1.png",
          },
          {
            heading: "Optimize the material recyling",
            description:
              "Information about material content for every product makes it possible to optimize the recycling flow and avoid degradation of materials.",
            image: "Recycler2.png",
          },
        ],
      },
    };
  },
  watch: {
    step(newVal) {
      this.currentStep = newVal;
    },
    currentStep(newVal) {
      this.$emit("stepChange", newVal);
    },
  },
  computed: {},
  methods: {
    emitLastStep() {
      this.onboardingdata[this.role] &&
        this.$emit("lastStep", this.onboardingdata[this.role].length - 1);
    },
  },
  updated() {
    this.emitLastStep();
  },
  created() {
    this.emitLastStep();
  },
};
</script>
