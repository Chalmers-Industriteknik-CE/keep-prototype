<template>
  <div>
    <DropDown
      :items="roles"
      :selectedItem="currentRole"
      v-on:change="changeRole($event)"
      :position="position"
    />
  </div>
</template>

<style lang="scss"></style>

<script>
import { get, sync } from "vuex-pathify";
import DropDown from "@/components/DropDown.vue";
export default {
  name: "RoleDropdown",
  components: { DropDown },

  data: function() {
    return {};
  },
  props: {
    position: {
      type: String,
      default: "bottom",
    },
  },
  methods: {
    changeRole(role) {
      this.currentRoleId = role.key;
    },
    parseItem(role, key) {
      return {
        key,
        title: role.title,
        image: require(`@/assets/roles/${role.image}`),
      };
    },
  },
  computed: {
    currentRoleId: sync("currentRole"),
    mobileSidebarActive: sync("mobileSidebarActive"),
    currentRole() {
      return this.parseItem(
        this.$store.state.roles[this.currentRoleId],
        this.currentRoleId
      );
    },
    roles() {
      const roles = [];

      Object.keys(this.$store.state.roles).forEach((key) => {
        const role = this.$store.state.roles[key];
        roles.push(this.parseItem(role, key));
      });
      return roles;
    },
  },
};
</script>
