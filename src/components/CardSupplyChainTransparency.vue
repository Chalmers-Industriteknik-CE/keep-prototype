<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Supply Chain Transparency</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else class="columns is-vcentered">
        <div class="column is-one-third">
          <div class="doughnutchart">
            <DoughnutChart
              :percent="cardData.d19_transparencyRate"
              :strokeWidth="20"
              :foregroundColor="'#2259f0'"
              :backgroundColor="'#EAEFF6'"
              :width="96"
              :height="96"
              :visibleValue="true"
            ></DoughnutChart>
          </div>
        </div>

        <div class="column is-two-thirds">
          <p
            class="text-body-light"
          >{{brandName}} has a supply chain transparency rating of {{cardData.d19_transparencyRate}}%.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from "vue-doughnut-chart";
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardSupplyChainTransparency",
  props: { cardData: Object },
  components: {
    DoughnutChart,
    NoDataMessage,
  },
  computed: {
    brandName() {
      return this.$store.state.products[this.$store.state.currentProduct].data
        .d0_brand;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.doughnut_chart {
  stroke-linecap: round;
}
</style>
