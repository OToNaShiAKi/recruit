<template>
  <v-container class="view grey darken-4 white--text">
    <vue-typed-js class="justify-center my-12" :strings="strings" :backSpeed="30">
      <span class="typing"></span>
    </vue-typed-js>
    <to-link
      class="ma-12"
      :left="{to: '/pre', link: '部门招新群'}"
      :right="{to: '/apply', link: '前往报名'}"
    />
  </v-container>
</template>

<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";
import ToLink from "@/components/ToLink";

Vue.use(VueTypedJs);

// import { game } from "@/assets/game.json";

export default {
  name: "Game",
  components: {
    ToLink
  },
  data: () => ({
    strings: [
      "这里本来应该是……",
      "骚骚的对话式各部门简介的",
      "本来应该是的orz",
      "然而我还没能肝出来_(:з」∠)_",
      "可以考虑先报名或是加部门招新群",
      "待我肝出来了再回来瞧瞧看看吧"
    ]
  })
};
</script>

<style scoped>
.view {
  min-width: 100%;
  min-height: 100%;
}
.view >>> a {
  color: white;
}
</style>