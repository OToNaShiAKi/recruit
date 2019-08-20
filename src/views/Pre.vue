<template>
  <v-container class="top">
    <v-layout text-center wrap>
      <v-flex>
        <v-img :src="logo" width="210" class="img" />
        <h2 class="headline mb-3">科学与技术协会</h2>
        <p class="subheading">
          宣传、报名尚未开启
          <br />请于报名期间扫码报名
          <br />可加入部门招新群提前了解详情
        </p>
      </v-flex>
      <depart />
    </v-layout>
  </v-container>
</template>

<script>
import Depart from "@/components/Depart";
import logo from "@/assets/logo.png";

export default {
  components: {
    Depart
  },
  data: () => ({
    logo
  })
};
</script>

<style scoped>
.top {
  background-color: #1976d2;
  color: white;
  padding: 0;
}
.img {
  margin: 20px auto;
}
</style>