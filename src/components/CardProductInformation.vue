<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Product Information</p>
    </header>

    <div class="card-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <figure class="image product">
              <img :src="productData.d0_product_image" :alt="productData.d0_modelId" />
            </figure>
          </div>
          <div class="column">
            <DataItem label="Manufacturer" :data="productData.d0_brand">
              <img class="logo-image" :src="productData.d0_brand_image" :alt="productData.d0_brand" />
              <p class="text-body">{{ productData.d0_brand }}</p>
            </DataItem>
            <DataItem label="Model" :data="productData.d0_modelId">{{ productData.d0_modelId }}</DataItem>
            <DataItem
              label="Serial Number"
              :data="productData.d0_serialNumber"
            >{{ productData.d0_serialNumber }}</DataItem>
          </div>
        </div>
        <hr />
        <div class="columns">
          <div class="column">
            <DataItem
              label="USN"
              :data="productData.usn"
            >{{ productData.usn }}</DataItem>
          </div>
          <div class="column">
            <DataItem
                label="DID"
                :data="productData.did"
            >{{ productData.did }}</DataItem>
          </div>
        </div>
        <DataItem
            label="Checksum"
            :data="productData.checksum"
        >{{ productData.checksum }}</DataItem>
      </div>
    </div>
  </div>
</template>

<script>
import DataItem from "@/components/DataItem.vue";
export default {
  name: "CardProductInformation",
  components: { DataItem },
  props: {
    productData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.image.product {
  width: 60%;
  max-width: 200px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 1rem;
}
.logo-image {
  height: 24px;
  width: 24px;
  border-radius: 4px;
  margin-right: 0.5em;
  display: block;
  float: left;
  object-fit: contain;
}

div.column {
  margin-bottom: 0.75rem;
}

.content p.text-uppercase {
  margin-bottom: 0.5rem;
}

.text-body.nb {
  display: inline-block;
}
</style>
