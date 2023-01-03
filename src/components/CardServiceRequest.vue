<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Service Request</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else v-for="(servicePartner, index) in cardData" :key="index" class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="servicePartner.d23_image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="text-body">{{servicePartner.d23_name}}</p>
          <p class="text-body-light">{{servicePartner.d23_description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardServiceRequest",
  components: { NoDataMessage },
  props: { cardData: Array },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.image img {
  border-radius: 16px;
}
.media {
  align-items: center;
}
.media-content {
  margin-left: 0.5em;
}
</style>
