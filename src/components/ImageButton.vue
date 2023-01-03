<template>
  <div class="image-button" :class="{ checked }">
    <div class="checked-icon" :class="{ checked }">
      <span class="fs-keep-icon-regular">!check</span>
    </div>
    <div class="button-icon fs-keep-icon-regular">{{ icon }}</div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.image-button {
  position: relative;
  width: calc(25% - 16px);
  border-radius: 16px;
  border: #eee 2px solid;
  display: flex;
  flex-flow: column;
  padding: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
  &.checked {
    border-color: $primary;
  }
  .checked-icon {
    width: 32px;
    height: 32px;
    font-size: 24px;
    background-color: #2cbc63;
    color: #fff;
    position: absolute;
    top: -8px;
    right: -8px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.3s ease;
    &.checked {
      transform: scale(1);
    }
  }
  .button-icon {
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: $mobileMenuBreakpoint) {
    width: 100%;
    margin: 4px;
    padding: 8px 16px;
    flex-flow: row-reverse;
    justify-content: space-between;
    max-height: 4rem;
    .button-icon {
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .checked-icon {
      top: -16px;
      right: -16px;
    }
  }
}
</style>

<script>
export default {
  name: "ImageButton",
  props: { label: String, icon: String, checked: Boolean },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
