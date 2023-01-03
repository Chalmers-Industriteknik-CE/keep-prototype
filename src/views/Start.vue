<template>
  <div class="start">
    <div class="columns">
      <div class="column">
        <CardWarranty></CardWarranty>
      </div>
      <div class="column">
        <CardWarranty></CardWarranty>
      </div>
      <div class="column">
        <CardReceipt></CardReceipt>
      </div>
    </div>
  </div>
</template>

<script>
import CardWarranty from "../components/CardWarranty.vue";
import CardReceipt from "../components/CardReceipt.vue";

export default {
  name: "Start",
  components: {
    CardWarranty,
    CardReceipt,
  },
};
</script>
<style scoped>
li {
  border: 1px solid black;
}
</style>
