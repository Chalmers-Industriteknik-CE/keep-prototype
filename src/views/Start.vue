<template>
  <div class="start">
    <div class="columns">
      <div class="column">
      </div>
      <div class="column">
        <CardCustom></CardCustom>
      </div>
      <div class="column">
      </div>
    </div>
  </div>
</template>

<script>
import CardCustom from "@/components/CardCustom";

export default {
  name: "Start",
  components: {
    CardCustom
  },
};
</script>
<style scoped>
li {
  border: 1px solid black;
}
</style>
