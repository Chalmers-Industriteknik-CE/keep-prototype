<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">pNFT details</p>
    </header>

    <div class="card-content">
      <div class="content">
        <p>DID: {{ did }}</p>
        <p>USN: {{ usn }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCustom",
  components: { },
  props: { cardData: Array },
  computed: {
    usn() {
      return '';
    },
    did() {
      return '';
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
</style>
