<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Energy Efficiency</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="text-body">Idle consumption</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="barvalue">
                <p class="text-body-light">{{cardData.d9_idleConsumption}} W</p>
              </div>
            </div>
          </div>
        </div>
        <div class="progressbar">
          <progress
            class="progress is-primary"
            :value="cardData.d9_idleConsumption"
            :max="cardData.d9_refConsumption"
          ></progress>
        </div>

        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="text-body">Peak consumption</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="barvalue">
                <p class="text-body-light">{{cardData.d9_peakConsumption}} W</p>
              </div>
            </div>
          </div>
        </div>
        <div class="progressbar">
          <progress
            class="progress is-primary"
            :value="cardData.d9_peakConsumption"
            :max="cardData.d9_refConsumption"
          ></progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardEnergyEfficiency",
  components: { NoDataMessage },
  props: { cardData: Object },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.progressbar {
  margin-top: -1em;
}

.level {
  margin-top: 2em;
}
p.text-m {
  margin-bottom: 0.5em;
}

p.text-body {
  margin-bottom: 0.3em;
}
</style>
