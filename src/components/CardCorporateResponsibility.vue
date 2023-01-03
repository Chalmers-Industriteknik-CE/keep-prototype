<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Corporate Responsibility</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />

      <div v-else class="content">
        <div class="columns is-mobile">
          <div class="column is-one-third">
            <div class="icon">
              <figure class="image is-124x124">
                <img src="@/assets/code-of-conduct.png" alt="Code of conduct" />
              </figure>
            </div>

            <p class="text-body-light has-text-centered is-danger">
              <span v-if="cardData.d18_codeOfConduct">
                <a :href="cardData.d18_codeOfConduct">Code of conduct</a>
              </span>
              <span v-else class="has-text-danger">No Code of conduct</span>
            </p>
          </div>

          <div class="column is-one-third" v-if="cardData.d18_followUpPolicy">
            <div class="icon">
              <figure class="image is-124x124">
                <img src="@/assets/follow-up.png" alt="Follow-up policy" />
              </figure>
            </div>
            <p class="text-body-light has-text-centered">
              <span v-if="cardData.d18_codeOfConduct">
                <a :href="cardData.d18_codeOfConduct">Follow-Up Policy</a>
              </span>
              <span v-else class="has-text-danger">No Follow-Up Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardCorporateResponsibility",
  components: { NoDataMessage },
  props: { cardData: Object },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

div.icon {
  width: 100%;
  height: auto;
}
.content {
  text-align: center;
}
.content figure {
  margin: 0;
}
.content figure img {
  margin: auto;
  min-width: 48px;
  height: auto;
  margin-bottom: 1rem;
}

img {
  -webkit-filter: 0 12.5px 6.3px -60px rgba(0, 0, 0, 0.025),
    0 100px 50px -60px rgba(0, 0, 0, 0.05);
  filter: 0 12.5px 6.3px -60px rgba(0, 0, 0, 0.025),
    0 100px 50px -60px rgba(0, 0, 0, 0.05);
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .text-body-light {
    font-size: 9px;
    line-height: 1;
  }
  .content figure img {
    min-width: 36px;
  }
}
</style>
