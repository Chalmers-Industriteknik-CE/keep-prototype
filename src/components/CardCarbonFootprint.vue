<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Carbon Footprint</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <vc-donut
        v-else
        background="white"
        foreground="grey"
        :size="150"
        unit="px"
        :thickness="30"
        has-legend
        :sections="sections"
        :total="100"
        :start-angle="0"
        :auto-adjust-text-size="true"
      >
        <p class="text-body-xl has-text-weight-medium">{{total.toFixed(0)}}</p>
        <p class="text-body-light">kg CO2e</p>
        <template slot="legend">
          <div class="cdc-legend">
            <span class="cdc-legend-item" v-for="(item,id) in sections" :key="id">
              <div class="top">
                <span class="cdc-legend-item-color" :style="{background:item.color}"></span>
                <span class="value">{{item.value.toFixed(1)}} %</span>
              </div>
             <span class="value-label">{{item.label}}</span>
            </span>
          </div>
        </template>
        <template v-slot:icon-after>
          <i class="fas fa-cog"></i>
        </template>
      </vc-donut>
    </div>
  </div>
</template>
<style lang="scss" >
@import "@/scss/global.scss";
.cdc-container {
  justify-content: space-around;
  .cdc-legend-item-color {
    height: 8px;
    width: 8px;
    border-radius: 4px;
  }
  .cdc-legend {
    flex-direction: row;
  }
  .cdc-legend-item {
    flex-basis: 25%;
    margin: 1rem 0;
    display: flex;
    flex-flow: column;
    .top {
      display: flex;
      align-items: center;
      .value {
        font-weight: 600;
      }
      .value-label {
        text-align: center;
        
      }
    }
  }
}

@media screen and (max-width: $tabletBreakpoint) {
  .cdc-container {
    flex-flow: column;
    .cdc-legend-item {
      flex-basis: 33.333%;
    }
  }
}
.cdc-legend {
  flex-direction: row;
  margin: 0px 0px 0px 1em;
  justify-content: flex-start;
  margin-top: 1em;
}

span.value-label{
  text-align: center;
}

span.value{
  margin-bottom: 0.5rem;
}
</style>
<script>
import Vue from "vue";
import Donut from "vue-css-donut-chart";
import "vue-css-donut-chart/dist/vcdonut.css";
import NoDataMessage from "@/components/NoDataMessage.vue";

Vue.use(Donut);

export default {
  name: "CardCarbonFootprint",
  props: { cardData: Array },
  data() {
    return {
      colors: [
        "#029C6D",
        "#1042DF",
        "#FFCB00",
        "#FF90A5",
        "#EF0033",
        "#A8D2F8",
        "#760BE8",
        "#000000",
      ],
      sections: [
        { label: "Chassi", value: 7, color: "#029C6D" },
        { label: "SSD", value: 8, color: "#1042DF" },
        { label: "PSU", value: 7, color: "#FFCB00" },
        { label: "Battery", value: 2, color: "#FF90A5" },
        { label: "Mainboard", value: 14, color: "#EF0033" },
        { label: "Display", value: 39, color: "#A8D2F8" },
        { label: "Transport", value: 7, color: "#760BE8" },
        { label: "Usage", value: 16, color: "#000000" },
      ],
    };
  },
  computed: {
    total() {
      return (
        this.cardData && this.cardData.reduce((acc, val) => acc + val.value, 0)
      );
    },
  },

  beforeUpdate() {
    this.sections = [];
    if (!this.cardData) return;

    const sum = this.cardData.reduce((acc, val) => acc + val.value, 0);
    this.cardData.forEach((d, i) => {
      this.sections.push({
        label: d.label,
        value: (d.value / sum) * 100,
        color: this.colors[i] || "#eee",
      });
    });
  },
  components: { NoDataMessage },
};
</script>
