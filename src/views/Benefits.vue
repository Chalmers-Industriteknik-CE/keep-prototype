<template>
  <div class="body">
    <NavbarStart></NavbarStart>
    <div class="container">
      <section class="whyKeep">
        <div class="columns">
          <div class="column is-6">
            <h1 class="title">What does KEEP bring to the table?</h1>
            <h2 class="subtitle">
              KEEP is the traceability solution for electronic products aiming
              to create a world with better products and less e-waste.
            </h2>
          </div>
          <div class="column is-6 has-text-right has-text-left-mobile">
            <p class="button-wrapper">
              <a href="./pdf/KEEP_report_ver2.pdf" download>
                <Button text="Download Report" icon="!down" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- producer -->
    <div class="container">
      <section class="role">
        <p class="role-icon">!producer</p>
        <h1 class="section-title">Producers and Retailers</h1>
        <div class="columns is-multiline">
          <div
            class="benefit column is-half"
            v-for="(obj, key) in producerJSON"
            :key="key"
          >
            <h2 class="benefit-title text-body">{{ obj.title }}</h2>
            <p class="subtitle text-body-light">{{ obj.subtitle }}</p>
          </div>
        </div>
      </section>
    </div>

    <hr class="divider" />

    <!-- purchaser -->
    <div class="container">
      <section class="role">
        <p class="role-icon">!purchaser</p>
        <h1 class="section-title">Purchasers</h1>
        <div class="columns is-multiline">
          <div
            class="benefit column is-half"
            v-for="(obj, key) in purchaserJSON"
            :key="key"
          >
            <h2 class="benefit-title text-body">{{ obj.title }}</h2>
            <p class="subtitle text-body-light">{{ obj.subtitle }}</p>
          </div>
        </div>
      </section>
    </div>

    <hr class="divider" />

    <!-- certifier -->
    <div class="container">
      <section class="role">
        <p class="role-icon">!certifier</p>
        <h1 class="section-title">Certifiers</h1>
        <div class="columns is-multiline">
          <div
            class="benefit column is-half"
            v-for="(obj, key) in certifierJSON"
            :key="key"
          >
            <h2 class="benefit-title text-body">{{ obj.title }}</h2>
            <p class="subtitle text-body-light">{{ obj.subtitle }}</p>
          </div>
        </div>
      </section>
    </div>

    <hr class="divider" />

    <!-- user -->
    <div class="container">
      <section class="role">
        <p class="role-icon">!user</p>
        <h1 class="section-title">Consumers and Users</h1>
        <div class="columns is-multiline">
          <div
            class="benefit column is-half"
            v-for="(obj, key) in userJSON"
            :key="key"
          >
            <h2 class="benefit-title text-body">{{ obj.title }}</h2>
            <p class="subtitle text-body-light">{{ obj.subtitle }}</p>
          </div>
        </div>
      </section>
    </div>

    <hr class="divider" />

    <!-- service -->
    <div class="container">
      <section class="role">
        <p class="role-icon">!service</p>
        <h1 class="section-title">Service and Support Agents</h1>
        <div class="columns is-multiline">
          <div
            class="benefit column is-half"
            v-for="(obj, key) in serviceJSON"
            :key="key"
          >
            <h2 class="benefit-title text-body">{{ obj.title }}</h2>
            <p class="subtitle text-body-light">{{ obj.subtitle }}</p>
          </div>
        </div>
      </section>
    </div>

    <hr class="divider" />

    <!-- remanufacturer -->
    <div class="container">
      <section class="role">
        <p class="role-icon">!remanufacturer</p>
        <h1 class="section-title">Remanufacturers</h1>
        <div class="columns is-multiline">
          <div
            class="benefit column is-half"
            v-for="(obj, key) in remanufacturerJSON"
            :key="key"
          >
            <h2 class="benefit-title text-body">{{ obj.title }}</h2>
            <p class="subtitle text-body-light">{{ obj.subtitle }}</p>
          </div>
        </div>
      </section>
    </div>

    <hr class="divider" />

    <!-- recycler -->
    <div class="container">
      <section class="role">
        <p class="role-icon">!recycler</p>
        <h1 class="section-title">Recyclers</h1>
        <div class="columns is-multiline">
          <div
            class="benefit column is-half"
            v-for="(obj, key) in recyclerJSON"
            :key="key"
          >
            <h2 class="benefit-title text-body">{{ obj.title }}</h2>
            <p class="subtitle text-body-light">{{ obj.subtitle }}</p>
          </div>
        </div>
      </section>
    </div>

    <hr class="divider" />

    <!-- public sector -->
    <div class="container">
      <section class="role">
        <p class="role-icon">!public_sector</p>
        <h1 class="section-title">Regulators and Authorities</h1>
        <div class="columns is-multiline">
          <div
            class="benefit column is-half"
            v-for="(obj, key) in publicsectorJSON"
            :key="key"
          >
            <h2 class="benefit-title text-body">{{ obj.title }}</h2>
            <p class="subtitle text-body-light">{{ obj.subtitle }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavbarStart from "@/components/NavbarStart.vue";
import Button from "@/components/Button.vue";

export default {
  name: "StartPage",
  components: {
    NavbarStart,
    Button,
  },
  data: () => ({
    producerJSON: [
      {
        title: "Every product has a story",
        subtitle:
          "A traceability system can help your brand to tell the story of where your products have been, how they have been made and how they are being used.",
      },
      {
        title: "Monitor your supply chain",
        subtitle:
          "A traceability system can help you to collect information from your suppliers more easily.",
      },
      {
        title: "Develop better products",
        subtitle:
          "A traceability system provides specific, reliable data about how your products have been used and for how long—data that you can use to create more sustainable, optimised products.",
      },
      {
        title: "Make logistics and handling efficient",
        subtitle:
          "By tracing products with a traceability system, you can cut costs, tighten logistics and improve handling processes.",
      },
      {
        title: "Win more tenders",
        subtitle:
          "A traceability system gives you easier access to product information, which means less work and better odds of winning tenders.",
      },

      {
        title: "Gain a competitive advantage",
        subtitle:
          "A traceability system allows comparing products’ environmental impact and helps you to differentiate your sustainably manufactured product from the products of competitors.",
      },

      {
        title: "Implement take back systems",
        subtitle:
          "A traceability system makes it easier to repossess your old products and, from them, create new projects in order to save costs and reduce environmental impact.",
      },
      {
        title: "Make recalls easier",
        subtitle:
          "As a direct line to your customers, a traceability system allows you to send push notifications about recalls.",
      },
      {
        title: "Get everyone on board",
        subtitle:
          "A traceability system can be used to not only communicate beyond your organisation but also to increase transparency about sustainability within your company and, in turn, create a shared vision.",
      },
    ],

    purchaserJSON: [
      {
        title: "Access data about sustainability",
        subtitle:
          "A traceability system provides easier access to data about sustainability and allows you to compare the environmental impact and social conditions of various products.",
      },
      {
        title: "Monitor your inventory",
        subtitle:
          "A traceability system helps you to monitor and track purchased products currently being used or stored within your organisation.",
      },
      {
        title: "Get everyone on board",
        subtitle:
          "A traceability system enables you to create a common vision at your company and ensures that products are used in sustainable ways.",
      },
      {
        title: "Expand reuse and improve recycling processes",
        subtitle:
          "A traceability system can help remanufacturers and material recyclers to take better care of products that you no longer need.",
      },
    ],
    certifierJSON: [
      {
        title: "Collect data more easily",
        subtitle:
          "With a traceability system, you can more easily collect more data that you can trust.",
      },
      {
        title: "Reach purchasers and consumers",
        subtitle:
          "With a traceability system you can reach purchasers and consumers more easily, providing them with a better overview of products’ certifications and makes it easier for them to learn more.",
      },
    ],
    userJSON: [
      {
        title: "Buy better products",
        subtitle:
          "A traceability system helps you to select and compare products based on performance and environmental impact.",
      },
      {
        title: "Feel safe when buying used products",
        subtitle:
          "A traceability system affords you access to a product’s history when buying used products and helps to ensure that the product has not been stolen.",
      },
      {
        title: "Keep your products longer",
        subtitle:
          "A traceability system gives you access to repair guides that make it easier to fix broken products and thus extend their lifetime.",
      },
      {
        title: "Declutter your space",
        subtitle:
          "With a traceability system, you gain access to information and reminders about what to do with products that you no longer use.",
      },
    ],
    serviceJSON: [
      {
        title: "Check and update the service history",
        subtitle:
          "A traceability system allows you to access a product’s service history and update its information once it has been serviced.",
      },
      {
        title: "Access warranty information",
        subtitle:
          "With a traceability system, you can be quickly determining whether the product is covered by a warranty.",
      },
      {
        title: "Recommend good products",
        subtitle:
          "A traceability system can be used as a guide, both for performance and environmental impact, when recommending products to your customers.",
      },
      {
        title: "Ease access to troubleshooting and repair guides",
        subtitle:
          "A traceability system offers you information about why products may be malfunctioning and how they may be fixed.",
      },
      {
        title: "Buy back products",
        subtitle:
          "A traceability system provides you with options to buy back old products from customers and remanufacture them.",
      },
    ],
    remanufacturerJSON: [
      {
        title: "Buy back products from consumers",
        subtitle:
          "A traceability system provides you with options to buy back old products from customers to remanufacture them and sell them again.",
      },
      {
        title: "Sort products based on use and wear",
        subtitle:
          "The product history in a traceability system can inform you how much the product has been used and what parts may need to be replaced.",
      },
      {
        title: "Ease access to information about parts and components",
        subtitle:
          "A traceability system can show you high-value products, parts and components that can be remanufactured and resold.",
      },
      {
        title: "Access repair and disassembly guides",
        subtitle:
          "A traceability system can accelerate the repair and disassembly of projects with guides that show you how.",
      },
      {
        title: "Achieve a transparent remanufacturing process",
        subtitle:
          "With a traceability system, you can trace your own processes and guarantee your customers high quality.",
      },
      {
        title: "Get stats on CO2 savings",
        subtitle:
          "Use a traceability system to aggregate and visualise your reductions in CO2 emissions achieved by remanufacturing.",
      },
    ],
    recyclerJSON: [
      {
        title: "Optimise material recycling",
        subtitle:
          "A traceability system can inform you about the material composition of each product and thus allow optimising the recycling process and avoid the downgrading of resources.",
      },
      {
        title: "Separate products with hazardous materials",
        subtitle:
          "A traceability system can allow you to easily identify hazardous materials in products that need to be sorted separately in order to protect your workforce.",
      },
      {
        title: "Ease access to information about parts and components",
        subtitle:
          "A traceability system can help you to pinpoint high-value products, parts and components that can be remanufactured and resold and/or that need special care.",
      },
      {
        title: "Access disassembly guides",
        subtitle:
          "A traceability system can afford quick access to disassembly guides that can help to accelerate your processes.",
      },
      {
        title: "Get stats on your recycling processes",
        subtitle:
          "A traceability system can help you to trace your processes and relay information to customers about what and how much you have recycled.",
      },
    ],

    publicsectorJSON: [
      {
        title: "Enhance national statistics",
        subtitle:
          "A traceability system can grant you better statistics regarding the waste electrical and electronic equipment (WEEE) directive.",
      },
      {
        title: "Make follow-up efficient",
        subtitle:
          "A traceability system can help you to monitor whether companies are acting in compliance with laws and regulations.",
      },
      {
        title: "Adjust the responsibilities of producers",
        subtitle:
          "A traceability system makes it possible for you to adjust the responsibilities of producers regarding the regulations for different types of products.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.whyKeep {
  margin-top: 4rem;
  h1.title {
    font-family: "Domine", serif;
    font-weight: 400;
    font-size: 3em;
    color: $text-primary;
    margin-bottom: 4rem;
  }
}

.body {
  background-color: $background;
}

.role-icon {
  font-family: "keep-icon-regular";
  font-size: 5em;
  line-height: 1em;
  color: $text-primary;
  margin-bottom: 1.5rem;
}

section.role {
  padding-bottom: 8rem;
  padding-top: 6rem;
}

.hero {
  padding: 0;
  margin: 0;
}

.section-title {
  font-family: "Domine", serif;
  font-size: 2em;
  color: $text-primary;
  margin-bottom: 1.5rem;
}

.benefit-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  &::before {
    content: "!forward";
    font-family: keep-icon-regular;
    font-size: 1.5rem;
    margin-left: -2rem;
    margin-right: 0.5rem;
  }
}

.benefit.column.is-half {
  margin-bottom: 1rem;
  padding-right: 1rem;
  &:nth-child(odd) {
    padding-right: 4rem;
  }
}

hr.divider {
  background-color: #c4c4c4;
  border: none;
  display: block;
  height: 1px;
  margin: 1.5rem 0;
}
@media screen and (max-width: $mobileMenuBreakpoint) {
  .container {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
</style>
