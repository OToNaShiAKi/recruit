<template>
  <v-container>
    <h2></h2>
    <vue-typed-js class="justify-center" :strings="strings" :backSpeed="30">
      <span class="typing"></span>
    </vue-typed-js>
  </v-container>
</template>

<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

import game from "@/assets/game.json";

export default {
  name: "Game",
  data: () => ({
    strings: game.name
  }),
};
</script>