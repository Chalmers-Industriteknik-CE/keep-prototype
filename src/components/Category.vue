<template>
  <div class="category">
    <h2>category: {{ category }}, cards: {{ cards }}</h2>
    <CardWarranty v-if="cards.includes(1)"></CardWarranty>
    <CardReceipt v-if="cards.includes(2)"></CardReceipt>
    <CardRepairGuides v-if="cards.includes(3)"></CardRepairGuides>
    <CardResellValue v-if="cards.includes(4)"></CardResellValue>
    <CardTroubleshoot v-if="cards.includes(5)"></CardTroubleshoot>
    <CardRecycledContent v-if="cards.includes(6)"></CardRecycledContent>
  </div>
</template>

<script>
import CardWarranty from "./CardWarranty.vue";
import CardReceipt from "@/components/CardReceipt.vue";
import CardRepairGuides from "@/components/CardRepairGuides.vue";
import CardResellValue from "@/components/CardResellValue.vue";
import CardTroubleshoot from "@/components/CardTroubleshoot.vue";
import CardRecycledContent from "@/components/CardRecycledContent";

export default {
  name: "Category",
  props: {
    category: {
      type: String
    },
    cards: {
      type: Array
    }
  },
  components: {
    CardWarranty,
    CardReceipt,
    CardRepairGuides,
    CardResellValue,
    CardTroubleshoot,
    CardRecycledContent
  }
};
</script>