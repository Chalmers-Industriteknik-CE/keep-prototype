<template>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ cardData.type }}</p><br>
        <p class="card-header-title">{{ cardData.description }}</p><br>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="columns" v-if="cardData.type === 'physicalAssetIdentifiers'">
            <div class="column">
              <span class="text-uppercase">Manufacturer</span>
              <br /><br />
              <p class="text-body">{{cardData.obj.manufacturer}}</p>
            </div>
            <div class="column">
              <span class="text-uppercase">Part Number</span>
              <br /><br />
              <p class="text-body">{{cardData.obj.part_number}}</p>
            </div>
            <div class="column">
              <span class="text-uppercase">Serial Number</span>
              <br />
              <p class="text-body">{{cardData.obj.serial_number}}</p>
            </div>
          </div>

          <div class="columns" v-else-if="cardData.type === 'mainImage'">
            <div class="column">
              <img :alt="cardData.description" :src="cardData.image" width="200px" />
            </div>
          </div>
          <div class="columns" v-else>
            <div class="column">
              <a :href="cardData.link">Link to Document</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardProductObada",
    props: { cardData: Object },
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/scss/global.scss";
  .v-center {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  .logo-image {
    height: 24px;
    width: 24px;
    border-radius: 4px;
    margin-right: 0.5em;
    display: inline-block;
  }
  
  .text-body.nb {
    display: inline-block;
  }
  </style>
  