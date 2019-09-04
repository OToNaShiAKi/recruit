<template>
  <v-app>
    <router-view />
    <v-snackbar v-model="snack.show" :color="snack.color" :timeout="1500">
      {{snack.text}}
      <router-link class="white--text" v-show="snack.to" :to="snack.to">确定</router-link>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["snack"])
  },
  created() {
    window.console.log(
      "同学，恭喜你喜提科协报名彩蛋~！\n",
      "ε=ε=ε=(~￣▽￣)~\n",
      "或许你还在犹豫是否加入，\n",
      "我会坦诚告诉你我们超酷。\n",
      "在这里大家都用头脑代步，\n",
      "神经回路让我们走得超速。\n",
      "计算机是发展的核心技术，\n",
      "变秃即变强已是新的领悟。\n",
      "加入我们让前途不再迷路，\n",
      "你的未来将不只领先几步。\n",
      "在这里创未来，欢迎来到科协！"
    );
  }
};
</script>
