<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Certifications and Compliances</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <!-- todo: add index in key -->
      <div
        v-else
        v-for="(certificate, index) in cardData"
        :key="certificate.d2_name[index]"
        class="cert"
      >
        <a :href="certificate.d2_link" class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                :src="certificate.d2_image"
                :alt="`${certificate.d2_name} logo`"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="text-body">{{ certificate.d2_name }}</p>
            <p class="text-body-light">
              Registered: {{ certificate.d2_registered }} <br />Status: Active
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardCertificates",
  components: { NoDataMessage },
  props: { cardData: Array },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.image img {
  border-radius: 16px;
  max-height: 100%;
  object-fit: contain;
}

.media-content {
  margin-left: 0.5em;
}

.text-body-light.easy {
  color: green;
}

.text-body-light.moderate {
  color: orange;
}

.cert:not(:last-child) {
  margin-bottom: 2rem;
}
</style>
