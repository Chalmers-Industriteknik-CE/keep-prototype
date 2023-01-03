<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Nearest Collectors</p>
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
          <div class="media" v-for="(collector,index)  in cardData" :key="index">
            <div class="media-left">
              <figure class="image is-64x64">
                <img :src="collector.d25_image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="text-body">{{collector.d25_collectorName}}</p>
              <p class="text-body-light">{{collector.d25_collectorDistanceTEMP}}</p>
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
  name: "CardNearestCollectors",
  components: { NoDataMessage, Map },
  props: { cardData: Array },
  data() {
    return {
      mapHeight: 500,
    };
  },
  computed: {
    markers() {
      return (
        this.cardData &&
        this.cardData.map((d) => ({
          pos: d.d25LatLng,
          image: d.d25_image,
          label: d.d25_collectorName,
          distance: d.d25_collectorDistanceTEMP,
        }))
      );
    },
  },
  methods: {},
  mounted() {
    this.mapHeight = this.$refs.right?.offsetHeight;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.marker-title {
  font-weight: 500;
}
.media {
  align-items: center;
}
.image.product {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.image.map {
  margin-right: 1.5rem;
}
.image img {
  border-radius: 16px;
}

.media-content {
  margin-left: 0.5em;
}
</style>
