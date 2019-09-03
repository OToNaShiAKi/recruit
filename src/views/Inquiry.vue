<template>
  <v-container>
    <field />
    <status v-if="show" />
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
  created() {
    this.$store.dispatch("search", {
      name: this.name,
      uid: this.uid
    });
  }
};
</script>