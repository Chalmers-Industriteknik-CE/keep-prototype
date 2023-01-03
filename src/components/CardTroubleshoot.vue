<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Troubleshoot</p>
    </header>

    <div class="card-content">
      <div class="columns">
        <div class="column">
          <div class="card-image">
            <figure class="image" id="troubleshoot-img">
              <img src="@/assets/troubleshoot.png" alt="troubleshoot image" />
            </figure>
          </div>
        </div>
        <div class="column">
          <p class="text-body">Is your product not working properly?</p>
          <p class="text-body-light">The troubleshoot guide might help you find what's wrong.</p>
          <Button text="Start Troubleshoot" block />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "CardTroubleshoot",
  components: { Button },
  props: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.title.is-6 {
  margin-bottom: 2em;
}

#troubleshoot-img {
  width: 60%;
  height: auto;
  min-width: 64px;
  margin: 1.5rem auto;
}

.text-body-light{
  margin-bottom: 1rem;
}
</style>
