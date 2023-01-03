<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Suppliers</p>
    </header>

    <div class="card-content">
      <NoDataMessage v-if="!cardData" />

      <div v-else class="columns is-vcentered">
        <div class="column">
          <div class="card-image">
            <Map v-if="mapHeight" :markers="markers" :height="mapHeight" />
          </div>
        </div>
        <div class="column" ref="right">
          <div class="media" v-for="(supplier, index) in cardData" :key="index">
            <div class="media-left">
              <figure class="image is-64x64">
                <img v-if="supplier.d26_image" :src="supplier.d26_image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="text-body">{{supplier.d26_supplierName}}</p>
              <p
                class="text-body-light"
              >{{supplier.d26_supplierCity}}, {{supplier.d26_supplierCountry}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";
import Map from "@/components/Map.vue";

export default {
  name: "CardSuppliers",
  components: { NoDataMessage, Map },
  props: { cardData: Array },
  data() {
    return {
      mapHeight: null,
    };
  },
  computed: {
    markers() {
      return (
        this.cardData &&
        this.cardData.map((d) => ({
          pos: d.d26LatLng,
          image: d.d26_image,
          label: d.d26_supplierName,
        }))
      );
    },
  },
  mounted() {
    this.mapHeight = this.$refs.right.offsetHeight;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.media {
  align-items: center;
}
.image {
  display: flex;
  align-items: center;
}
.media-content {
  margin-left: 0.5em;
}
</style>
