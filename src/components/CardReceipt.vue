<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Digital Receipt</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div class="content" v-else>
        <div class="columns">
          <div class="column">
            <span class="text-uppercase">Date</span>
            <br />
            <p class="text-body">{{cardData.d7_purchaseDate}}</p>
          </div>
          <div class="column">
            <span class="text-uppercase">Time</span>
            <br />
            <p class="text-body">{{cardData.d7_purchaseTime}}</p>
          </div>
        </div>
        <div class="column">
          <span class="text-uppercase">Seller</span>
          <div class="v-center">
            <img class="logo-image" :src="cardData.d7_sellerImage" :alt="cardData.d7_seller" />
            <p class="text-body nb">{{cardData.d7_seller}}</p>
          </div>
        </div>
        <div class="column">
          <span class="text-uppercase">Amount</span>
          <br />
          <p class="text-body">{{cardData.d7_amount}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

export default {
  name: "CardReceipt",
  components: { NoDataMessage },
  props: { cardData: Object },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.v-center {
  display: flex;
  flex-flow: row;
  align-items: center;
}
.logo-image {
  height: 24px;
  width: 24px;
  border-radius: 4px;
  margin-right: 0.5em;
  display: inline-block;
}

.text-body.nb {
  display: inline-block;
}
</style>
