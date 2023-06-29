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
              <img v-if="product.image" :src="product.image" :alt="product.partNumber" />
              <img v-else alt="no image" src="@/assets/no-image.png" />
            </figure>
          </div>
          <div class="column">
            <DataItem label="Manufacturer" :data="product.manufacturer">
              <!--<img class="logo-image" :src="productData.d0_brand_image" :alt="productData.d0_brand" />-->
              <p class="text-body">{{ product.manufacturer }}</p>
            </DataItem>
            <DataItem label="Model" :data="product.partNumber">{{ product.partNumber }}</DataItem>
            <DataItem
              label="Serial Number"
              :data="product.serialNumber"
            >{{ product.serialNumber }}</DataItem>
          </div>
        </div>
        <hr />
        <div class="columns">
          <div class="column">
            <DataItem
              label="USN"
              :data="product.usn"
            >{{ product.usn }}</DataItem>
          </div>
          <div class="column">
            <DataItem
                label="DID"
                :data="productData.did"
            >{{ product.did }}</DataItem>
          </div>
        </div>
        <DataItem
            label="Checksum"
            :data="product.checksum"
        >{{ product.checksum }}</DataItem>
      </div>
    </div>
  </div>
</template>

<script>
import DataItem from "@/components/DataItem.vue";
import { mapState } from 'vuex'
export default {
  name: "CardProductInformation",
  components: { DataItem },
  props: {
    productData: {
      type: Object,
    },
  },
  computed: mapState({
    currentProduct: state => state.currentProduct,

    products: state => state.products,

    documents(state) {
      return this.product.data.documents
    },

    serialNumber(state) {
      return this.product.data.d0_serialNumber
    },

    image(state) {
      return state.products[state.currentProduct].data.d0_product_image
    },

    product(state) {
      return state.products[state.currentProduct]
    }
  })
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
