<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Tech Specs</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div class="content">
        <div class="columns is-multiline">
          <div class="column is-6" v-for="(spec, key) in cardData" :key="key">
            <DataItem :label="spec.label" :data="spec.value">{{spec.value}}</DataItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";
import DataItem from "@/components/DataItem.vue";

export default {
  name: "CardTechSpecs",
  components: { NoDataMessage, DataItem },
  props: { cardData: Array },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.text-body {
  white-space: pre-wrap;
  line-height: 24px;
}
.content p.text-uppercase {
  margin-bottom: 0.5em;
}

div.column {
  margin-bottom: 1rem;
}
</style>
