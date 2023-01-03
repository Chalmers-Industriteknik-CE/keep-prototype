<template>
  <div class="container">
    <Navbar></Navbar>
    <div>
      <div class>sidebar</div>
      <div class="cardlisting">cardlisting</div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ProductView",
  components: { Navbar },

  data: function() {
    return {};
  },

  methods: {},

  computed: {
    roles() {
      return this.$store.state.roles;
    },
    displayCategory() {
      return this.$store.state.roles[this.$store.state.currentRole].categories[
        this.$store.state.currentCategory
      ].categoryTitle;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
