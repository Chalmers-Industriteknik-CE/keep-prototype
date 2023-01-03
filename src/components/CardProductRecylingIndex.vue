<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Product Recycling Index</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else>
        <div class="progressbar">
          <progress
            class="progress is-primary"
            :value="cardData.d16_materialRecoveryRate"
            max="100"
          >{{cardData.d16_materialRecoveryRate}} %</progress>
        </div>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="text-body-light">0%</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="barvalue">
                <p class="text-body-light">100%</p>
              </div>
            </div>
          </div>
        </div>
        <p
          class="text-body-light"
        >The material recovery rate of the {{productName}} is {{cardData.d16_materialRecoveryRate}} %.</p>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardProductRecyclingIndex",
  components: { NoDataMessage },
  computed: {
    productName() {
      return this.$store.state.products[this.$store.state.currentProduct].title;
    },
  },
  props: { cardData: Object },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.progressbar {
  margin-top: 2em;
}

.level {
  margin-top: 0.25em;
}
p.text-m {
  margin-bottom: 0.5em;
}

p.text-body {
  margin-bottom: 0.3em;
}
</style>
