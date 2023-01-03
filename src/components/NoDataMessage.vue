<template>
  <div class="nodata-message">No data available</div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.nodata-message {
  text-align: center;
  margin-bottom: 2rem;
}
</style>

<script>
import { get } from "vuex-pathify";

export default {
  name: "NoDataMessage",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
