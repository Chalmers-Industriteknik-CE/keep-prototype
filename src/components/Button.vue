<template>
  <button :class="['keep-button', type, block ? ' block':'', size]" @click="onclick">
    <span
      v-if="icon && iconPosition === 'left'"
      class="button-icon fs-keep-icon-regular left"
    >{{icon}}</span>
    <span>{{text}}</span>
    <span
      v-if="icon && iconPosition === 'right'"
      class="button-icon fs-keep-icon-regular right"
    >{{icon}}</span>
  </button>
</template>

<style lang="scss" global>
@import "@/scss/global.scss";
.button-icon {
  font-size: 1.5em;
  &.left {
    margin-right: 24px;
  }
  &.right {
    margin-left: 24px;
  }
}
.keep-button {
  font-family: acumin-pro, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: $button-primary;
  color: white;
  border: none;
  border-radius: 3rem;
  padding: 0.95rem 1.3rem;
  line-height: 1;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(143, 148, 142, 0.24);
  &.block {
    width: 100%;
    text-align: center;
  }
  &:hover {
    background-color: $button-primary-hover;
    color: white;
  }
  &:focus {
    color: white;
    border: none;
    box-shadow: none;
    outline-style: none;
  }
  &:active {
    color: white;
    border: none;
    box-shadow: none;
  }
  &.is-small {
    padding: 0.75rem 1rem;
  }
}

.keep-button.is-secondary {
  font-family: acumin-pro, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: #fff;
  color: $text-primary;
  border: none;
  border-radius: 3rem;
  box-shadow: 0 0 12px rgba(143, 148, 142, 0.24);
  &:hover {
    background-color: $button-secondary-hover;
    color: $text-primary;
  }
}
</style>

<script>
import { get } from "vuex-pathify";

export default {
  name: "Button",
  components: {},
  props: {
    text: { type: String, required: true },
    icon: String,
    iconPosition: { type: String, default: "right" },
    type: { type: String, default: "is-primary" },
    block: { type: Boolean, default: false },
    size: { type: String, default: "is-normal" },
    onclick: {type: Function, default: function() {}},
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
