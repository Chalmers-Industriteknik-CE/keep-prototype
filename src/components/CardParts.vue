<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Parts</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else class="columns is-multiline">
        <div v-for="(part, index) in cardData" :key="cardData[index]" class="column is-6">
          <div class="media">
            <div class="media-content">
              <DataItem :label="part.d11_part" :data="part.d11_part">{{part.d11_value}}</DataItem>
            </div>
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
  components: { NoDataMessage, DataItem },
  name: "CardParts",
  props: { cardData: Array },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

</style>
