<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Working Time</p>
    </header>

    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else v-for="factory  in cardData" :key="factory.d3_factoryId">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="text-body-light">{{factory.d3_expectedWorkingTime}}h/week</p>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="barvalue">
                <p
                  class="text-body-light"
                >{{factory.d3_actualWorkingTime - factory.d3_expectedWorkingTime}}h overtime</p>
              </div>
            </div>
          </div>
        </div>

        <div class="progressbar">
          <progress
            class="progress is-primary"
            :value="factory.d3_expectedWorkingTime"
            :max="factory.d3_actualWorkingTime"
          >35%</progress>
        </div>

        <p class="text-body-light">
          On average a {{factory.d3_factoryName}} factory worker is working
          <strong>{{overtime(factory)}} hours</strong> overtime/week.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardWorkingTime",
  components: { NoDataMessage },
  props: { cardData: Array },
  computed: {
    overtime() {
      return (factory) =>
        factory.d3_actualWorkingTime - factory.d3_expectedWorkingTime;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.progressbar {
  margin-top: -1em;
  margin-bottom: 2em;
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
