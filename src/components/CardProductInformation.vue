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
              label="Manufactured"
              :data="productData.d0_manufacturingDate"
            >{{ productData.d0_manufacturingDate }}</DataItem>
          </div>
          <div class="column">
            <DataItem
              label="Purchased"
              :data="productData.d0_purchaseDate"
            >{{ productData.d0_purchaseDate }}</DataItem>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <DataItem label="Certification" :data="productData.d2">
              <span v-if="productData.d2">{{productData.d2.length}} active certifications</span>
              <span v-else>-</span>
            </DataItem>
          </div>
          <div class="column">
            <DataItem
              label="Producer Responsibility"
              :data="productData.d0_paidProducerResponsibilityFee"
            >
              <img class="logo-image" src="@/assets/icons/producer.png" alt="Producer" />
              <span>Company</span>
            </DataItem>
          </div>
        </div>
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
  margin: auto;
  margin-top: 2rem;
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
