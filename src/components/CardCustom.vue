<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">DLT Backend</p>
    </header>

    <div class="card-content">
      <label for="account" style="display:block;margin-bottom: 0.5em;">Import Private Key</label>
      <input id="account" class="keep-input" type="text" name="account" style="width: 100%;" placeholder="Enter Key">
      <Button text="Import" :isLoading="isLoading"  :onclick="doImport" block />
      <p>Import the private key to connect this demo to the Decentralized Registry storing Digital Product Passports.</p>
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
      isLoading: false
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
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push({
          name: 'product',
          params: { id: '123456' },
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
