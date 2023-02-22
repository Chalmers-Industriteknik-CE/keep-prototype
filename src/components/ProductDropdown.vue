<template>
  <div>
    <DropDown
      :items="products"
      :selectedItem="currentProduct"
      v-on:change="changeProduct($event)"
      :position="position"
    />
  </div>
</template>

<style lang="scss"></style>

<script>
import { get, sync } from "vuex-pathify";
import DropDown from "@/components/DropDown.vue";
export default {
  name: "ProductDropwdown",
  components: { DropDown },

  data: function() {
    return {};
  },
  props: {
    position: {
      type: String,
      default: "bottom",
    },
  },
  methods: {
    imageSrc(image) {
      return require(`@/assets/products/${image}`);
    },
    changeProduct(product) {
      this.$router.push({ name: "product", params: { id: product.key } });
      this.currentProductId = product.key;
      this.mobileSidebarActive = false;
    },
    parseItem(product, key) {
      return {
        key,
        title: product.data.usn,
        subTitle: product.title,
        image: require(`@/assets/products/${product.image}`),
      };
    },
  },
  computed: {
    currentProductId: sync("currentProduct"),
    mobileSidebarActive: sync("mobileSidebarActive"),
    products() {
      const products = [];
      Object.keys(this.$store.state.products).forEach((key) => {
        const prod = this.$store.state.products[key];
        products.push(this.parseItem(prod, key));
      });
      return products;
    },
    currentProduct() {
      return this.parseItem(
        this.$store.state.products[this.currentProductId],
        this.currentProductId
      );
    },
  },
};
</script>
