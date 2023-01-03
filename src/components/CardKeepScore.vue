<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Keep Score</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else>
        <div class="columns chart is-vcentered">
          <div class="column">
            <div class="doughnutchart">
              <DoughnutChart
                :percent="cardData.d22_keepScore"
                :foregroundColor="'#2259F0'"
                :backgroundColor="'#EAEFF6'"
                :strokeWidth="20"
                :width="96"
                :height="96"
                :visibleValue="true"
              ></DoughnutChart>
            </div>
          </div>

          <div class="column">
            <p
              class="text-body keeper"
              v-if="cardData.d22_categoryPosition <= 5"
            >
              It's a keeper!
            </p>
            <p class="text-body-light">
              Top {{ cardData.d22_categoryPosition }} in laptops
            </p>
          </div>
        </div>

        <div class="columns is-vcentered">
          <div class="column">
            <div class="metric">
              <p class="text-body">Durability</p>
            </div>
            <div class="progressbar">
              <progress
                class="progress is-primary"
                :value="cardData.d22_durability"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        <div class="columns is-vcentered">
          <div class="column">
            <div class="metric">
              <p class="text-body">Repairability</p>
            </div>
            <div class="progressbar">
              <progress
                class="progress is-primary"
                :value="cardData.d22_repairability"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        <div class="columns is-vcentered">
          <div class="column">
            <div class="metric">
              <p class="text-body">Energy Efficiency</p>
            </div>
            <div class="progressbar">
              <progress
                class="progress is-primary"
                :value="cardData.d22_energyEfficiency"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        <div class="columns is-vcentered">
          <div class="column">
            <div class="metric">
              <p class="text-body">Social Conditions</p>
            </div>
            <div class="progressbar">
              <progress
                class="progress is-primary"
                :value="cardData.d22_socialConditions"
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        <div class="columns is-vcentered">
          <div class="column">
            <div class="metric">
              <p class="text-body">Recyclability</p>
            </div>
            <div class="progressbar">
              <progress
                class="progress is-primary"
                :value="cardData.d22_recyclability"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from "vue-doughnut-chart";
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardKeepScore",
  props: { cardData: Object },
  components: {
    DoughnutChart,
    NoDataMessage,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.columns.chart {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(219, 219, 219, 0.5);
}

.doughnutchart {
  float: right;
  margin-right: 2rem;
}

.doughnut_chart {
  stroke-linecap: round;
}

.progressbar {
  width: 100%;
  margin: auto;
}

.metric p.text-body {
  margin: 0 0 0.25rem;
}

p.text-body.keeper {
  margin-bottom: 0.3rem;
  font-size: 20px;
}
</style>
