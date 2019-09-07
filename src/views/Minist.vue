<template>
  <v-container>
    <form-list v-for="(v, i) in departs" :title="v.name" :desserts="v.members" :key="i" />
  </v-container>
</template>

<script>
import FormList from "@/components/FormList";

export default {
  name: "Minist",
  components: {
    FormList
  },
  data: () => ({
    departs: [
      { name: "media", members: [] },
      { name: "editor", members: [] },
      { name: "office", members: [] },
      { name: "bird", members: [] },
      { name: "echo", members: [] }
    ]
  }),
  created() {
    this.$store.dispatch("members").then(res => {
      this.departs.forEach(element => {
        element.members = res[element.name];
      });
    });
  }
};
</script>