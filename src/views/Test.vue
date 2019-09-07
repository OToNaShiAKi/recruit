<template>
  <v-container>
    <v-row class="justify-center">测试</v-row>
    <v-row>
      <v-col v-for="(v, i) in picture" :key="i">
        <v-img :src="v.src" />
        <small class="caption">{{i + 1}}：{{v.type}}</small>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { picture } from "@/assets/test.json";

export default {
  name: "Test",
  data: () => ({
    picture
  })
};
</script>