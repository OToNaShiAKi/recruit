<template>
  <v-container>
    <v-content class="body-2" v-for="(v, i) in depart" :key="i">{{i | depart}}：{{v}}</v-content>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Status",
  computed: {
    ...mapState(["depart"])
  },
  filters: {
    depart(str) {
      if (str == "office") return "策划部";
      else if (str == "echo") return "One Echo";
      else if (str == "bird") return "雁祉作坊";
      else if (str == "media") return "媒体部";
      else if (str == "editor") return "编辑部";
    }
  }
};
</script>