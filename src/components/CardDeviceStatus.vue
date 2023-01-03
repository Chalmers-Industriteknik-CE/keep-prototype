<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Device Status</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else>
        <div class="columns is-mobile is-vcentered">
          <div class="column is-2">
            <div class="icon">
              <figure class="image is-124x124">
                <img src="@/assets/battery-status.png" alt="Battery status" />
              </figure>
            </div>
          </div>
          <div class="column">
            <p class="text-body-light">Battery</p>
            <p
              :class="['text-body','has-text-weight-medium',getStatus(cardData.d5_batteryValue)] "
            >{{cardData.d5_batteryCondition}}</p>
          </div>
        </div>
        <div class="columns is-mobile is-vcentered">
          <div class="column is-2">
            <div class="icon">
              <figure class="image is-124x124">
                <img src="@/assets/security-status.png" alt="Security status" />
              </figure>
            </div>
          </div>
          <div class="column">
            <p class="text-body-light">Security</p>
            <p
              :class="['text-body','has-text-weight-medium',getStatus(cardData.d5_securityScore)] "
            >{{cardData.d5_securityCondition}}</p>
          </div>
        </div>
        <div class="columns is-mobile is-vcentered">
          <div class="column is-2">
            <div class="icon">
              <figure class="image is-124x124">
                <img src="@/assets/temp-status.png" alt="Temperature status" />
              </figure>
            </div>
          </div>
          <div class="column">
            <p class="text-body-light">Temperature</p>
            <p
              :class="['text-body','has-text-weight-medium',getStatus(cardData.d5_temperatureValue)] "
            >{{cardData.d5_temperatureStatus}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardDeviceStatus",
  components: { NoDataMessage },
  props: { cardData: Object },
  methods: {
    getStatus(value) {
      let status = null;
      switch (true) {
        case value <= 40:
          status = "has-text-danger";
          break;
        case value <= 60:
          status = "has-text-danger";
          break;
        case value <= 80:
          status = "has-text-success";
          break;

        default:
          break;
      }
      return status;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

div.icon {
  width: 100%;
  height: auto;
}

.content figure img {
  min-width: 48px;
  height: auto;
}

img {
  -webkit-filter: 0 12.5px 6.3px -60px rgba(0, 0, 0, 0.025),
    0 100px 50px -60px rgba(0, 0, 0, 0.05);
  filter: 0 12.5px 6.3px -60px rgba(0, 0, 0, 0.025),
    0 100px 50px -60px rgba(0, 0, 0, 0.05);
}

.content p:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
