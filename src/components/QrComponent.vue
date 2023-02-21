<template>
  <div class="modal-card onboarding-modal" style="width: auto">
    <section class="modal-card-body">
      <img v-if="imageData" :src="imageData" alt />
      <p>USN: {{ usn }}</p>
      <a :href="imageData" :download="link + '.png'" class="download-link">
        <b-icon pack="fas" icon="download" size="is-small"></b-icon>
      </a>
    </section>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  name: "QrComponent",
  props: { usn: String, link: String },
  data: () => {
    return {
      imageData: null,
    };
  },
  methods: {
    generateQR() {
      const that = this;
      const port = () => window.location.port && `:${window.location.port}`;

      const url = `${window.location.hostname}${port()}/#/qr/${this.link}`;
      QRCode.toDataURL(url, { scale: 16, maskPattern: 5 }, function (
        error,
        url
      ) {
        if (error) {
          console.error(error);
          return;
        }
        that.imageData = url;
      });
    },
  },

  mounted() {
    this.generateQR();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
#canvas {
  max-width: 100%;
}
.modal-card-body {
  object-fit: contain;
}
.download-link {
  display: flex;
  justify-content: center;
  color: $text-secondary;
}
</style>
