<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Product History</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />

      <div v-else class="timeline">
        <TimelineItem
          v-for="(item, index) in cardData"
          :key="index"
          :type="item.d20_event"
          :date="item.d20_date"
          :label="item.d20_registeredBy"
          :description="item.d20_location"
          :image="item.d20_eventImage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../../node_modules/bulma-timeline/dist/css/bulma-timeline.min.css";
import TimelineItem from "@/components/TimelineItem.vue";
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardProductHistory",
  components: { TimelineItem, NoDataMessage },
  props: { cardData: Array },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.timeline-content {
  width: 100%;
}

p.date {
  text-align: right;
}

div.media-right {
  margin-right: 0.75rem;
  border-radius: 1rem;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.08), 0 0px 8px rgba(0, 0, 0, 0.16);
}

figure.image img {
  border-radius: 1rem;
}
</style>
