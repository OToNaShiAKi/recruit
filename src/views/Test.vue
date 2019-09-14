<template>
  <v-container>
    <v-row class="justify-center">测试</v-row>
    <v-row>
      <v-col v-for="(v, i) in picture" :key="i">
        <small class="caption">{{i + 1}}：{{v.type}}</small>
        <v-img :src="v.src" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Test",
  data: () => ({
    picture: []
  }),
  created() {
    this.$store.dispatch("test").then(res => {
      this.picture = res;
    });
  }
};
</script>