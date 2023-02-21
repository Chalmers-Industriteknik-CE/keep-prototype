<template>
  <div class="elements">
    <div class="columns">
      <div class="column">
        <CardWarranty></CardWarranty>
        <CardResellValue></CardResellValue>
        <CardCertificates></CardCertificates>
        <CardWorkingTime></CardWorkingTime>
        <CardTechSpecs></CardTechSpecs>
        <CardDeviceStatus></CardDeviceStatus>
        <CardCarbonFootprint></CardCarbonFootprint>
        <CardProductInformation></CardProductInformation>
        <CardCustom></CardCustom>
        <CardProductUsage></CardProductUsage>
      </div>
      <div class="column">
        <CardReceipt></CardReceipt>
        <CardTroubleshoot></CardTroubleshoot>
        <CardEnergyEfficiency></CardEnergyEfficiency>
        <CardFactoryWages></CardFactoryWages>
        <CardParts></CardParts>
        <CardRenewableEnergy></CardRenewableEnergy>
        <CardWorkerSatisfaction></CardWorkerSatisfaction>
        <CardKeepScore></CardKeepScore>
        <CardNearestCollectors></CardNearestCollectors>
      </div>
      <div class="column">
        <CardRepairGuides></CardRepairGuides>
        <CardRecycledContent></CardRecycledContent>
        <CardProductRecylingIndex></CardProductRecylingIndex>
        <CardMaterials></CardMaterials>
        <CardCorporateResponsibility></CardCorporateResponsibility>
        <CardSupplyChainTransparency></CardSupplyChainTransparency>
        <CardProductHistory></CardProductHistory>
        <CardServiceRequest></CardServiceRequest>
        <CardSuppliers></CardSuppliers>
      </div>
    </div>
  </div>
</template>

<script>
import CardWarranty from "@/components/CardWarranty.vue";
import CardReceipt from "@/components/CardReceipt.vue";
import CardRepairGuides from "@/components/CardRepairGuides.vue";
import CardResellValue from "@/components/CardResellValue.vue";
import CardTroubleshoot from "@/components/CardTroubleshoot.vue";
import CardRecycledContent from "@/components/CardRecycledContent";
import CardCertificates from "@/components/CardCertificates.vue";
import CardEnergyEfficiency from "@/components/CardEnergyEfficiency.vue";
import CardProductRecylingIndex from "@/components/CardProductRecylingIndex.vue";
import CardWorkingTime from "@/components/CardWorkingTime.vue";
import CardFactoryWages from "@/components/CardFactoryWages.vue";
import CardMaterials from "@/components/CardMaterials.vue";
import CardTechSpecs from "@/components/CardTechSpecs.vue";
import CardParts from "@/components/CardParts.vue";
import CardCorporateResponsibility from "@/components/CardCorporateResponsibility.vue";
import CardDeviceStatus from "@/components/CardDeviceStatus.vue";
import CardRenewableEnergy from "@/components/CardRenewableEnergy.vue";
import CardSupplyChainTransparency from "@/components/CardSupplyChainTransparency.vue";
import CardCarbonFootprint from "@/components/CardCarbonFootprint.vue";
import CardWorkerSatisfaction from "@/components/CardWorkerSatisfaction.vue";
import CardProductHistory from "@/components/CardProductHistory.vue";
import CardProductInformation from "@/components/CardProductInformation.vue";
import CardKeepScore from "@/components/CardKeepScore.vue";
import CardServiceRequest from "@/components/CardServiceRequest.vue";
import CardProductUsage from "@/components/CardProductUsage.vue";
import CardNearestCollectors from "@/components/CardNearestCollectors.vue";
import CardSuppliers from "@/components/CardSuppliers.vue";
import CardCustom from "@/components/CardCustom.vue";

export default {
  name: "Elements",
  components: {
    CardWarranty,
    CardReceipt,
    CardRepairGuides,
    CardResellValue,
    CardTroubleshoot,
    CardRecycledContent,
    CardCertificates,
    CardEnergyEfficiency,
    CardProductRecylingIndex,
    CardWorkingTime,
    CardFactoryWages,
    CardMaterials,
    CardTechSpecs,
    CardParts,
    CardCorporateResponsibility,
    CardDeviceStatus,
    CardRenewableEnergy,
    CardSupplyChainTransparency,
    CardCarbonFootprint,
    CardWorkerSatisfaction,
    CardProductHistory,
    CardProductInformation,
    CardKeepScore,
    CardServiceRequest,
    CardProductUsage,
    CardNearestCollectors,
    CardSuppliers,
    CardCustom
  }
};
</script>

<style scoped>
li {
  border: 1px solid black;
}
</style>
