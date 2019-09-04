<template>
  <v-container>
    <field />
    <status />
  </v-container>
</template>

<script>
import Field from "@/components/Field";
import Status from "@/components/Status";
import { mapState } from "vuex";

export default {
  name: "Inquiry",
  components: {
    Field,
    Status
  },
  computed: {
    ...mapState(["show", "name", "uid"])
  },
};
</script>