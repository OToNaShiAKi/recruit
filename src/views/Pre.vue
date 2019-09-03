<template>
  <v-layout class="top" text-center wrap>
    <v-flex>
      <v-img :src="logo" width="210" class="img" />
      <h2 class="headline mb-3">科学与技术协会</h2>
      <p class="subheading">
        <router-link class="white--text" to="/apply">前往报名</router-link>
        <br />可加入部门招新群咨询群主了解详情
      </p>
    </v-flex>
    <depart />
  </v-layout>
</template>

<script>
import Depart from "@/components/Depart";
import logo from "@/assets/logo.png";

export default {
  name: "Pre",
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
}
.img {
  margin: 20px auto;
}
</style>