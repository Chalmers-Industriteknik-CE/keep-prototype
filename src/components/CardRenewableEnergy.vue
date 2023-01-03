<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Renewable Energy</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />

      <div v-else class="columns is-vcentered">
        <div class="column is-one-third">
          <div class="doughnutchart">
            <DoughnutChart
              :percent="percentage"
              :foregroundColor="'#2259F0'"
              :backgroundColor="'#EAEFF6'"
              :strokeWidth="20"
              :width="96"
              :height="96"
              :visibleValue="true"
            ></DoughnutChart>
          </div>
        </div>

        <div class="column is-two-thirds">
          <p class="text-body-light">
            {{percentage}}% of the energy needed to produce this product comes from
            renewable sources.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from "vue-doughnut-chart";
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardRenewableEnergy",
  props: { cardData: Object },
  computed: {
    percentage() {
      return (
        (this.cardData.d12_renewableEnergy /
          this.cardData.d12_energyConsumption) *
        100
      ).toFixed(0);
    },
  },
  components: {
    DoughnutChart,
    NoDataMessage,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.doughnut_chart {
  stroke-linecap: round;
}
</style>
