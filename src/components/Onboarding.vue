<template>
  <div class="modal-card onboarding-modal" style="width: auto">
    <header class="modal-card-head">
      <p v-if="step < 0" class="modal-card-title">Select your role</p>
      <span @click="closeModal()" class="fs-keep-icon-regular">!close</span>
    </header>
    <section class="modal-card-body">
      <div class="role-box" v-if="step < 0">
        <ImageButton
          v-for="(role, roleKey) in roles"
          :key="roleKey"
          @click.native="changeRole(roleKey)"
          :label="role.title"
          :icon="role.icon"
          :checked="currentRole === roleKey"
        />
      </div>
      <div class="onboarding-container" v-else>
        <OnboardingSlides
          :role="currentRole"
          :step="step"
          v-on:lastStep="lastStep = $event"
          v-on:stepChange="if (step !== $event) step = $event;"
        />
      </div>
      <div class="footer-buttons"></div>
    </section>
    <footer class="modal-card-foot footer-buttons">
      <Button
        @click.native="nextStep()"
        text="Next"
        icon="!forward"
        v-if="currentRole"
      />
      <Button
        text="Back"
        icon="!back"
        iconPosition="left"
        type="is-secondary"
        v-if="step >= 0"
        @click.native="prevStep()"
      />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.modal-card-head {
  background-color: #fff;
  border-bottom: none;
  border-bottom-color: none;
}
.modal-card-foot {
  background-color: #fff;
  border-top: none;
  border-color: none;
}
.modal-card-title {
  font-family: "Domine", serif;
}
.onboarding-modal {
  max-width: 100%;
  min-width: 800px;
  height: 90vh;
  max-height: 900px;
}
.role-box {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  .image-button {
    margin: 8px;
  }
}
.footer-buttons {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}
@media screen and (max-width: $mobileMenuBreakpoint) {
  .onboarding-modal {
    max-width: 100%;
    position: relative;
    min-width: auto;
    height: calc(var(--vh) * 100);
  }

  .role-box {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin-bottom: 3rem;
  }
}
</style>

<script>
import ImageButton from "./ImageButton.vue";
import Button from "./Button.vue";

import OnboardingSlides from "./OnboardingSlides.vue";

import { get, sync } from "vuex-pathify";

export default {
  name: "OnboardingModal",
  components: { ImageButton, OnboardingSlides, Button },
  props: {},
  data() {
    return {
      step: -1,
      lastStep: 0,
    };
  },
  computed: {
    roles() {
      return this.$store.state.roles;
    },
    currentRole: get("currentRole"),
    currentProduct: get("currentProduct"),
    gUIdeActive: sync("gUIdeActive"),
    isOnboardingModalActive: sync("isOnboardingModalActive"),
    currentRoleObject() {
      return (
        this.$store.state.roles[this.$store.state.currentRole] || {
          title: "none",
        }
      );
    },
  },
  methods: {
    changeRole(newRole) {
      this.$store.commit("SET_ROLE", newRole);
      this.$store.commit("SET_CATEGORY", 0);
    },
    closeModal() {
      this.isOnboardingModalActive = false;
    },
    nextStep() {
      if (this.step < this.lastStep) {
        this.step++;
        return;
      }
      if (this.step === this.lastStep) {
        this.isOnboardingModalActive = false;
        this.gUIdeActive = true;
        this.$router.push({
          name: "product",
          params: { id: this.currentProduct },
        });
      }
    },
    prevStep() {
      if (this.step <= this.lastStep && this.step > 0) {
        this.step--;
        return;
      }
      if (this.step === 0) {
        this.step--;
        this.changeRole(null);
      }
    },
  },
};
</script>
