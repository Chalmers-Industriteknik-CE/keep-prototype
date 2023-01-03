<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Factory Wages</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />

      <div v-else class="country" v-for="factory  in cardData" :key="factory.d10_factoryId">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="text-body">{{factory.d10_factoryCountry}}</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="barvalue">
                <p class="text-body-light">{{factory.d10_medianSalary}}€/month</p>
              </div>
            </div>
          </div>
        </div>
        <div class="progressbar">
          <progress
            :class="'progress ' + wageScore(factory)"
            :value="factory.d10_medianSalary"
            :max="2000"
          ></progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardFactoryWages",
  components: { NoDataMessage },
  props: { cardData: Array },
  computed: {
    wageScore() {
      return (factory) => {
        const refWage = 2000;
        const ratio = factory.d10_medianSalary / refWage;
        let className = "is-success";
        switch (true) {
          case ratio <= 0.25:
            className = "is-danger";
            break;
          case ratio <= 0.5:
            className = "is-warning";
            break;
        }
        return className;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.country {
  flex: 1;
}
.card .country:not(:last-child) {
  margin-bottom: 2em;
  margin-right: 2rem;
}
.card-content {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: $tabletBreakpoint) {
  .card .country:not(:last-child) {
    margin-right: 0rem;
  }
  .card-content {
    flex-flow: column;
  }
}
.progressbar {
  margin-top: -1em;
}
</style>
