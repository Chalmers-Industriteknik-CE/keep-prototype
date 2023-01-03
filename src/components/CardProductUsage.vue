<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Product Usage</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else class="content">
        <div class="columns">
          <div class="column is-6">
            <DataItem label="Today" :data="cardData.d24_today">
              <span v-html="parseTime(cardData.d24_today)"></span>
            </DataItem>
          </div>
          <div class="column is-6">
            <DataItem label="Daily avg" :data="cardData.d24_dailyAvg">
              <span v-html="parseTime(cardData.d24_dailyAvg)"></span>
            </DataItem>
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
  name: "CardProductUsage",
  components: { NoDataMessage, DataItem },
  props: { cardData: Object },
  computed: {
    parseTime() {
      return (time) => {
        const hour = time - (time % 1);
        const minutes = Math.round(60 * (time % 1));

        return `<span class="time">${hour}<span class="small">h</span>&nbsp;${minutes}<span class="small">m</span></span>`;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
::v-deep .time {
  font-weight: 500;
  font-size: 2rem;
  .small {
    font-size: 1rem;
  }
}
.image img {
  border-radius: 16px;
}

.media-content {
  margin-left: 0.5em;
}
</style>
