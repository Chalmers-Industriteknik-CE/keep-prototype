<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title"></p>
    </header>

    <div class="card-content" style="text-align: center;">
      <label for="account" style="display:block;margin-bottom: 0.5em; font-weight: bold;">Enter Account Address</label>
      <input id="account" class="keep-input" v-model="account" type="text" name="account" style="width: 100%;" placeholder="e.g. obada1z96fvpm2lpk4mnfyk8ra2qsmw4v7502cm0e4ve">
      <Button text="Import Digital Product Passports" :isLoading="isLoading"  :onclick="doImport" block />
      <p>All Digital Product Passports associated with this account will be download from the Decentralized Registry into this demo.</p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "CardCustom",
  components: {Button },
  props: { cardData: Array },
  data() {
    return {
      isLoading: false,
      account: '',
    }
  },
  computed: {
    usn() {
      return '';
    },
    did() {
      return '';
    }
  },
  methods: {
    doImport() {
      if (this.account === '') {
        return '';
      }

      this.$store.dispatch("fetchProducts", this.account)

      this.isLoading = true;
      setTimeout(() => {
        this.$router.push({
          name: 'product',
          params: { id: this.account },
        });
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.keep-button {
  margin-top: 1rem;
}

.keep-input {
  font-family: acumin-pro, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  border: 1px solid $button-primary;
  border-radius: 3rem;
  padding: 0.75rem 1.3rem;
  line-height: 1;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(143, 148, 142, 0.24);
}
</style>
