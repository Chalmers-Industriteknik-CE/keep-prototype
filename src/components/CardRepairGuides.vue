<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Repair Guides</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else v-for="(guide, index) in cardData" :key="index" class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="guide.d14_image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="text-body">{{guide.d14_typeOfRepair}}</p>
          <p :class="['text-body-light',guide.d14_difficulty]">{{guide.d14_difficulty}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardRepairGuides",
  components: { NoDataMessage },
  props: { cardData: Array },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.image img {
  border-radius: 16px;
}

.media-content {
  margin-left: 0.5em;
}

.text-body-light.Easy {
  color: green;
}

.text-body-light.Moderate {
  color: orange;
}
</style>
