<template>
  <v-layout class="top" text-center wrap>
    <v-flex>
      <v-img :src="logo" width="210" class="mt-2 mx-auto" />
      <h1 class="headline mb-3 white--text">科学与技术协会</h1>
      <p class="subheading white--text">
        可加入部门招新群咨询群主了解详情
        <br />
        <router-link class="white--text" to="/apply">前往报名</router-link>
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
}
</style>