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
    window.console.log("同学，恭喜你喜提One Echo报名彩蛋~！");
    window.console.log("ε=ε=ε=(~￣▽￣)~");
    window.console.log("或许你还在犹豫是否加入，");
    window.console.log("我会坦诚告诉你我们超酷。");
    window.console.log("在这里大家都用头脑代步，");
    window.console.log("神经回路让我们走得超速。");
    window.console.log("计算机是发展的核心技术，");
    window.console.log("变秃即变强已是新的领悟。");
    window.console.log("加入我们让前途不再迷路，");
    window.console.log("你的未来将不只领先几步。");
    window.console.log("在这里创未来，欢迎来到One Echo！");
  }
};
</script>
