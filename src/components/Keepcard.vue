<template>
  <div class="keep-card tile" :class="tileSize" v-if="pData">
    <div
      class="help"
      v-gUIde="
        card === 21
          ? {
              heading: 'Product data',
              content:
                'Read about the collection of data connected to each card',
              step: 5,
            }
          : false
      "
    >
      <b-tooltip
        position="is-left"
        multilined
        type="is-light"
        :active="toolTipIsActive"
      >
        <span class="fs-keep-icon-regular">!info</span>
        <template #content>
          <h2>{{ cardDescription[card].title }}</h2>
          <p>{{ cardDescription[card].description }}</p>
          <h2>Difficulty rating</h2>
          <p>{{ cardDescription[card].difficulty }}</p>
          <DifficultyRating :score="cardDescription[card].difficultyScore" />
        </template>
      </b-tooltip>
    </div>
    <CardWarranty v-if="card == 0" :cardData="productData.d21" />
    <CardResellValue v-if="card == 1" :cardData="productData.d1" />
    <CardCertificates v-if="card == 2" :cardData="productData.d2" />
    <CardWorkingTime v-if="card == 3" :cardData="productData.d3" />
    <CardTechSpecs v-if="card == 4" :cardData="productData.d4" />
    <CardDeviceStatus v-if="card == 5" :cardData="productData.d5" />
    <CardCarbonFootprint v-if="card == 6" :cardData="productData.d6" />
    <CardReceipt v-if="card == 7" :cardData="productData.d7" />
    <CardTroubleshoot v-if="card == 8" :cardData="productData.d8" />
    <CardEnergyEfficiency v-if="card == 9" :cardData="productData.d9" />
    <CardFactoryWages v-if="card == 10" :cardData="productData.d10" />
    <CardParts v-if="card == 11" :cardData="productData.d11" />
    <CardRenewableEnergy v-if="card == 12" :cardData="productData.d12" />
    <CardWorkerSatisfaction v-if="card == 13" :productData="productData" />
    <CardRepairGuides v-if="card == 14" :cardData="productData.d14" />
    <CardRecycledContent v-if="card == 15" :cardData="productData.d15" />
    <CardProductRecylingIndex v-if="card == 16" :cardData="productData.d16" />
    <CardMaterials v-if="card == 17" :cardData="productData.d17" />
    <CardCorporateResponsibility
      v-if="card == 18"
      :cardData="productData.d18"
    />
    <CardSupplyChainTransparency
      v-if="card == 19"
      :cardData="productData.d19"
    />
    <CardProductHistory v-if="card == 20" :cardData="productData.d20" />
    <CardProductInformation v-if="card == 21" :productData="productData" />
    <CardKeepScore v-if="card == 22" :cardData="productData.d22" />
    <CardServiceRequest v-if="card == 23" :cardData="productData.d23" />
    <CardProductUsage v-if="card == 24" :cardData="productData.d24" />
    <CardNearestCollectors v-if="card == 25" :cardData="productData.d25" />
    <CardSuppliers v-if="card == 26" :cardData="productData.d26" />
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

import DifficultyRating from "@/components/DifficultyRating.vue";

export default {
  name: "Keepcard",
  props: {
    card: {
      type: Number,
    },
    pData: {
      type: Object,
    },
  },
  data() {
    return {
      toolTipIsActive: true,
      cardSizes: {
        0: "is-4",
        1: "is-6",
        2: "is-6",
        3: "is-4",
        4: "is-12",
        5: "is-6",
        6: "is-6",
        7: "is-4",
        8: "is-6",
        9: "is-6",
        10: "is-12",
        11: "is-12",
        12: "is-6",
        13: "is-4",
        14: "is-6",
        15: "is-6",
        16: "is-6",
        17: "is-12",
        18: "is-4",
        19: "is-6",
        20: "is-12 is-6-mobile",
        21: "is-8",
        22: "is-4",
        23: "is-6",
        24: "is-4",
        25: "is-12",
        26: "is-12",
      },
      cardDescription: {
        0: {
          title: "Warranty Details",
          description:
            "This card shows the warranty status for the product and expiration date. There's also an option to extend the warranty.",
          difficulty:
            "This information is available today and is easy to access.",
          difficultyScore: 1,
        },
        1: {
          title: "Resell Value",
          description:
            "This card shows what resellers are willing to pay for a used product in good condition.",
          difficulty:
            "This information should be possible to get from partners like GIAB or Inrego.",
          difficultyScore: 1,
        },
        2: {
          title: "Certificates and Compliances",
          description:
            "This card shows all the certificates and compliances for the product. ",
          difficulty: "This information is available from the producers.",
          difficultyScore: 1,
        },
        3: {
          title: "Working Times",
          description:
            "This card shows a weekly average of working times in the factories where the product was produced.",
          difficulty:
            "This information is hard to get and timeconsuming to verify.",
          difficultyScore: 3,
        },
        4: {
          title: "Tech Specs",
          description:
            "This card shows the technical specification for the product.",
          difficulty:
            "This information exists today and can be provided by the producers.",
          difficultyScore: 1,
        },
        5: {
          title: "Device Status",
          description: "This card shows the current condition of the device.",
          difficulty:
            "This information requires an internet-connected product.",
          difficultyScore: 1,
        },
        6: {
          title: "Product Carbon Footprint",
          description:
            "This card shows the total carbon footprint of the product and how it's distributed between different parts and processes.",
          difficulty:
            "This is not measured today. Would need to develop a standard to make fair comparisons between products.",
          difficultyScore: 3,
        },
        7: {
          title: "Digital Receipt",
          description:
            "This card shows a digital copy of your receipt. No need to worry about losing a receipt ever again. ",
          difficulty:
            "This information could be accessed from certain retailers.",
          difficultyScore: 2,
        },
        8: {
          title: "Troubleshoot",
          description:
            "If your product isn’t working properly this card takes you to a troubleshooting guide that might help you find out what’s wrong. ",
          difficulty:
            "If the producer has an online troubleshooting guide this should be easy.",
          difficultyScore: 1,
        },
        9: {
          title: "Energy Efficiency",
          description:
            "The energy consumption during use is an important part of a product's environmental impact. This card shows the energy consumption of the product and if it has any energy certificates.",
          difficulty:
            "For most products' this information is included in the technical specification.",
          difficultyScore: 1,
        },
        10: {
          title: "Factory Wages",
          description:
            "This card shows how much the workers earn in the factories where this product was produced. The wages are compared to the recommended minimum wages of the region.",
          difficulty:
            "This information might be possible to get for Tier 1 factories. The information will be timeconsuming to verify.",
          difficultyScore: 3,
        },
        11: {
          title: "Parts",
          description:
            "This card shows the parts list for the product. Parts with a high resell value are highlighted. It could also be possible to order spare parts from here.",
          difficulty:
            "Easy on a Tier 1 level. Very difficult to cover all parts as electronic products often contain many thousand parts.",
          difficultyScore: 2,
        },
        12: {
          title: "Renewable Energy in Production",
          description:
            "A large part of the environmental impact occurs during production. This card shows how much of the energy used during production that comes from renewable sources.",
          difficulty:
            "This is often not measured by factories today. It is also difficult because there are many factories involved in the production of one product. ",
          difficultyScore: 3,
        },
        13: {
          title: "Worker Satisfaction",
          description:
            "This card shows how satisfied the workers are at the production facilites.",
          difficulty:
            "This is not measured at the factories today. It is also timeconsuming to verify this information.",
          difficultyScore: 3,
        },
        14: {
          title: "Repair Guides",
          description:
            "This card links to repair guides that make it easier to repair the product yourself.",
          difficulty:
            "Depends on the type of product and if there are any repair/service guides available.",
          difficultyScore: 2,
        },
        15: {
          title: "Recycled Content",
          description:
            "This card shows how the amount of recycled metals and plastics the product contains.",
          difficulty: "Few producers measure this today",
          difficultyScore: 3,
        },
        16: {
          title: "Product Recycling Index",
          description:
            "This is a measurement showing to what level the materials of the product can be recycled and used again.",
          difficulty: "This information doesn't exist for most products today.",
          difficultyScore: 3,
        },
        17: {
          title: "Materials",
          description:
            "This card shows the materials and substances the product contains.",
          difficulty:
            "This information often exists but could be sensitive. Manual labour is often needed to extract this data.",
          difficultyScore: 2,
        },
        18: {
          title: "Corporate Responsibility",
          description:
            "This card provides information about the company’s social responsibility work and policies.",
          difficulty:
            "This information can often be found on the producers’ websites",
          difficultyScore: 1,
        },
        19: {
          title: "Supply Chain Transparency",
          description:
            "This card shows how much is known and shared about the supply chain.",
          difficulty:
            "A large number of suppliers make this difficult and timeconsuming but companies are starting to map out their supply chains.",
          difficultyScore: 2,
        },
        20: {
          title: "Product History",
          description:
            "This card presents important events in the product’s life. It's possible to see when the product was purchased and if it has been serviced. This could also be useful when buying products secondhand to make sure the product isn’t stolen goods. ",
          difficulty:
            "This information does not exist today and this system needs to be developed.",
          difficultyScore: 3,
        },
        21: {
          title: "Product Information",
          description:
            "This card summarises information such as manufacturing and purchase dates, the number of certificates, and if the producer's responsibility fee has been paid.",
          difficulty:
            "This information exists today and can be accessed easily.",
          difficultyScore: 1,
        },
        22: {
          title: "Keep Score",
          description:
            "The KEEP-score makes it easier to compare products on both environmental and social factors.",
          difficulty:
            "This rating system does not exist today and needs to be developed. ",
          difficultyScore: 3,
        },
        23: {
          title: "Service Request",
          description: "This card presents service partners near you.",
          difficulty:
            "With the right service partners, this should be possible.",
          difficultyScore: 1,
        },
        24: {
          title: "Product Usage",
          description:
            "This card shows how the product has been used. This information can be used to estimate a product's condition.",
          difficulty: "This information requires an internet-enabled product.",
          difficultyScore: 3,
        },
        25: {
          title: "Nearest Collectors",
          description:
            "This card shows you where you can hand in the products you don’t use anymore so that they can get a second life.",
          difficulty:
            "This information exists and should be possible to collect.",
          difficultyScore: 1,
        },
        26: {
          title: "Suppliers",
          description:
            "This card shows where the materials and parts come from as well as where the product was assembled.",
          difficulty:
            "A large number of parts and materials make this difficult. Could be done on the Tier 1 level and for critical components.",
          difficultyScore: 2,
        },
      },
    };
  },
  computed: {
    productData() {
      let currentProduct = this.$store.state.currentProduct;
      return this.$store.state.products[currentProduct].data;
    },
    tileSize() {
      return this.cardSizes[this.card];
    },
  },
  components: {
    DifficultyRating,
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.keep-card {
  position: relative;
  .card-header {
    padding-right: 3rem;
  }

  .help {
    position: absolute;
    right: 2rem;
    top: 2rem;
    z-index: 1;
    font-size: 1.5rem;
    cursor: help;
  }
  .wip {
    border: 1px solid red;
  }
  .card {
    margin: 1em;
    display: flex;
    flex-flow: column;
  }
  ::v-deep .b-tooltip.is-left .tooltip-content {
    background: #fff;
    padding: 16px;
    text-align: left;
    transform: translate3d(0, -24px, 10px);
    box-shadow: 0px 0px 15px #0000001a;
    width: 300px;
    border-radius: 16px;
    &:before {
      top: 8px;
      left: 100%;
      transform: translateY(10px);
      border-left-color: #fff;
    }
    h2 {
      font-size: 16px;
      color: $text-primary;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      color: $text-secondary;
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .card {
      margin: 0 0 1em;
    }
    .help {
      right: 1rem;
      top: 1rem;
    }
  }
}
</style>
