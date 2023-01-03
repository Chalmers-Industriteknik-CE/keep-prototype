<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Materials and Substances</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else>
        <div class="materials">
          <div class="material" v-for="(material, index) in filteredList" :key="index">
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <p class="text-body">{{material.d17_name}}</p>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <div class="barvalue">
                    <p class="text-body-light">{{percentage(material)}} %</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="progressbar">
              <progress class="progress is-primary" :value="percentage(material)" max="100"></progress>
            </div>
          </div>
        </div>
        <Button
          :text="expanded ? 'Show less':'View All'"
          :type="expanded ? 'is-secondary':'is-primary'"
          @click.native="expanded = !expanded"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";
import Button from "@/components/Button.vue";

export default {
  name: "CardMaterials",
  components: { NoDataMessage, Button },
  props: { cardData: Array },
  data() {
    return {
      showLimit: 3,
      expanded: false,
    };
  },
  computed: {
    sum() {
      return (
        this.cardData &&
        this.cardData.reduce((acc, mat) => (acc += mat.d17_amount), 0)
      );
    },
    filteredList() {
      return (
        this,
        this.cardData.filter((mat, i) => i < this.showLimit || this.expanded)
      );
    },
    percentage() {
      return (mat) => ((mat.d17_amount / this.sum) * 100).toFixed(1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.material {
  flex: 1;
  flex-basis: calc(33% - 2rem);
  max-width: calc(33% - 2rem);
}
.card .material:not(:last-child) {
  margin-bottom: 2em;
  margin-right: 2rem;
}
.materials {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.keep-button {
  margin: 0 auto;
  display: block;
}
@media screen and (max-width: $tabletBreakpoint) {
  .card .material:not(:last-child) {
    margin-right: 0rem;
  }
  .materials {
    flex-flow: column;
    margin-bottom: 2rem;
    .material {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
}
.progressbar {
  margin-top: -1em;
}
</style>
