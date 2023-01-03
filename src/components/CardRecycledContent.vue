<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Recycled Content</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else class="content">
        <div v-if="cardData.d15_notApplicable">
          <p class="not-applicable">{{cardData.d15_notApplicableDescription}}</p>
        </div>
        <div v-else>
          <div class="columns is-mobile">
            <div class="column is-one-third">
              <div class="progressbar vertical">
                <b-progress
                  class="progress is-primary"
                  size="is-large"
                  type="is-primary"
                  :value="cardData.d15_recycledMetals"
                  :max="100"
                ></b-progress>
              </div>
              <div class="progress-text">
                <p class="text-m has-text-centered">{{cardData.d15_recycledMetals}} %</p>
                <p class="text-body has-text-centered">Metal</p>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="progressbar vertical">
                <b-progress
                  class="progress is-primary"
                  size="is-large"
                  type="is-primary"
                  :value="cardData.d15_postConsumerRecycledPlastic"
                  :max="100"
                ></b-progress>
              </div>
              <p class="text-m has-text-centered">{{cardData.d15_postConsumerRecycledPlastic}} %</p>
              <p class="text-body has-text-centered">Plastic</p>
              <p class="text-xs has-text-centered">(Post-consumer)</p>
            </div>
            <div class="column is-one-third">
              <div class="progressbar vertical">
                <b-progress
                  class="progress is-primary"
                  size="is-large"
                  type="is-primary"
                  :value="cardData.d15_postIndustryRecycledPlastic"
                  :max="100"
                ></b-progress>
              </div>
              <p class="text-m has-text-centered">{{cardData.d15_postIndustryRecycledPlastic}} %</p>
              <p class="text-body has-text-centered">Plastic</p>
              <p class="text-xs has-text-centered">(Post-industry)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardRecycledContent",
  components: { NoDataMessage },
  props: { cardData: Object },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.not-applicable {
  text-align: center;
}
.column {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.progress-wrapper {
  height: auto;
  overflow: visible;
}
.progressbar {
  width: 80%;
  display: inline-block;
  height: 10vh;
  transform-origin: center;
  display: flex;
  align-items: center;
}

p.text-m {
  margin-bottom: 0;
  margin-top: 20px;
}

p.text-body {
  margin-bottom: 0.3em;
}
</style>
