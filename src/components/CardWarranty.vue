<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Warranty Details</p>
    </header>
    <div class="card-content">
      <NoDataMessage v-if="!cardData" />
      <div v-else>
        <div class="columns">
          <div class="column">
            <DataItem label="Status" :data="active">
              <span class="has-text-success" v-if="active">Active</span>
              <span v-else class="has-text-danger">Expired</span>
            </DataItem>
          </div>

          <div class="column">
            <DataItem label="Remaining" :data="remaining">
              <span v-if="active">{{ remaining }}</span>
              <span v-else class="has-text-danger">-</span>
            </DataItem>
          </div>
        </div>
        <div class="column">
          <DataItem
            label="Expiration date"
            :data="cardData.d21_warrantyExpirationDate"
            >{{
              new Date(cardData.d21_warrantyExpirationDate)
                | date("dd MMMM, yyyy")
            }}</DataItem
          >
        </div>
        <Button text="Extend Warranty" block />
      </div>
    </div>
  </div>
</template>

<script>
import NoDataMessage from "@/components/NoDataMessage.vue";

import DataItem from "@/components/DataItem.vue";
import Button from "@/components/Button.vue";
import { formatDistanceToNow } from "date-fns";
export default {
  name: "CardWarranty",
  components: { NoDataMessage, DataItem, Button },
  props: { cardData: Object },
  computed: {
    remaining() {
      return formatDistanceToNow(
        new Date(this.cardData.d21_warrantyExpirationDate),
        new Date(),
        {
          addSuffix: true,
        }
      );
    },
    active() {
      return (
        new Date(this.cardData.d21_warrantyExpirationDate).getTime() -
          new Date().getTime() >
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.button {
  margin-top: 1rem;
}
</style>
