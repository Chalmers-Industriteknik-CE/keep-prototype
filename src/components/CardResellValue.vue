<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Resell Value</p>
    </header>

    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else class="media" v-for="(reseller, index) in cardData" :key="reseller.d1_reseller[index]">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="reseller.d1_resellerImage" :alt="`${reseller.d1_reseller} logo`" />
          </figure>
        </div>

        <div class="media-content">
          <p class="text-body">{{ reseller.d1_reseller }}</p>
          <p class="text-m">{{ reseller.d1_price }} SEK</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardResellValue",
  components: { NoDataMessage },
  props: {
    cardData: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.media {
  display: flex;
  align-items: center;
}
.image img {
  border-radius: 16px;
}

.media-content {
  margin-left: 0.5em;
}
</style>
