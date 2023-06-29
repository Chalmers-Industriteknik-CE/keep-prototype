<template>
    <div style="width: 100%; display:flex;flex-wrap: wrap;">
        <div v-for="document in documents" :key="document.id" class="keep-card tile is-4">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">{{ document.type }}</p><br>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div v-if="document.type === 'physicalAssetIdentifiers'">
                            <DataItem :label="'Manufacturer'" :data="document.obj.manufacturer">{{ document.obj.manufacturer }}</DataItem>
                            <DataItem :label="'Part Number'" :data="document.obj.part_number">{{ document.obj.part_number }}</DataItem>
                            <DataItem :label="'Serial Number'" :data="document.obj.serial_number">{{ document.obj.serial_number }}</DataItem>
                        </div>

                        <div class="has-text-centered" v-else-if="document.type === 'mainImage'">
                            <img :alt="document.description" :src="document.image" style="max-width: 200px;"/>
                        </div>

                        <div v-else>
                            <a :href="document.link">Link to Document</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!documents.find(e => e.type === 'mainImage')" class="keep-card tile is-4">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">mainImage</p><br>
                </header>
                <div class="card-content">
                    <div class="content">
                        <div class="has-text-centered">
                            <img alt="no image" src="@/assets/no-image.png" style="max-width: 200px;"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import DataItem from "@/components/DataItem.vue";

  export default {
      name: "CardDocuments",
      components: {DataItem},
      props: {
          documents: {
              type: Array,
          }
      },
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
  
  .keep-card {
    position: relative;
    .card-header {
      padding-right: 3rem;
    }
  
    .help {
      position: absolute;
      right: 2rem;
      top: 2rem;
      z-index: 1;
      font-size: 1.5rem;
      cursor: help;
    }
    .wip {
      border: 1px solid red;
    }
    .card {
      margin: 1em;
      display: flex;
      flex-flow: column;
    }
    ::v-deep .b-tooltip.is-left .tooltip-content {
      background: #fff;
      padding: 16px;
      text-align: left;
      transform: translate3d(0, -24px, 10px);
      box-shadow: 0px 0px 15px #0000001a;
      width: 300px;
      border-radius: 16px;
      &:before {
        top: 8px;
        left: 100%;
        transform: translateY(10px);
        border-left-color: #fff;
      }
      h2 {
        font-size: 16px;
        color: $text-primary;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        color: $text-secondary;
        margin-bottom: 2rem;
      }
    }
    @media screen and (max-width: 768px) {
      .card {
        margin: 0 0 1em;
      }
      .help {
        right: 1rem;
        top: 1rem;
      }
    }
  }
  </style>