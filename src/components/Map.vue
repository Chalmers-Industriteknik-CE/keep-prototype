<template>
  <div class="map-wrapper">
    <l-map ref="myMap" v-if="showMap" :options="mapOptions" :style="{height:mapHeight}">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker
        v-for="(marker,index)  in markers"
        :key="index"
        :lat-lng="marker.pos"
        :icon="getIcon(marker.image)"
      >
        <l-tooltip :options="{ permanent: false, interactive: true }">
          <div>
            <p class="marker-title">{{marker.label}}</p>
            <p v-if="marker.distance">{{marker.distance}}</p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.map-wrapper {
  overflow: hidden;
  border-radius: 16px;
  z-index: 1;
  position: relative;
}
.marker-title {
  font-weight: 500;
}
</style>

<script>
import L from "leaflet";
import { latLng, icon } from "leaflet";

import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";

export default {
  name: "Map",
  components: { LMap, LTileLayer, LMarker, LTooltip },
  props: {
    markers: Array,
    height: { type: Number, default: 200 },
  },
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url:
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      attribution:
        "&copy; Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.",
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      icon: icon({
        iconUrl: require(`@/assets/crosshair.png`),
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      }),
    };
  },
  computed: {
    mapHeight() {
      const height = this.height > 200 ? this.height : 200;
      return height + "px";
    },
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    getIcon(image) {
      return icon({
        iconUrl: image || require(`@/assets/crosshair.png`),
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });
    },
  },
  mounted() {
    if (this.markers) {
      this.$refs.myMap.mapObject.fitBounds(this.markers.map((d) => d.pos));
    }
  },
};
</script>
