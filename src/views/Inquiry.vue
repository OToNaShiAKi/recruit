<template>
  <v-container>
    <field />
    <status />
    <to-link :right="{to: '/pre', link: '部门招新群'}" :left="{to: '/apply', link: '返回报名'}" />
  </v-container>
</template>

<script>
import Field from "@/components/Field";
import Status from "@/components/Status";
import ToLink from "@/components/ToLink";

export default {
  name: "Inquiry",
  components: {
    Field,
    Status,
    ToLink
  },
};
</script>