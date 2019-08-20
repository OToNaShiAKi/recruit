<template>
  <v-flex class="depart" xs12>
    <h4 class="title">招新群</h4>
    <v-hover v-slot:default="{ hover }" v-for="(v, i) in depart" :key="i">
      <v-img :src="v.src" width="210" class="img">
        <v-expand-transition>
          <v-flex class="d-flex justify-center flex-column hover" v-if="hover">
            <h4 class="mb-5">{{v.name}}</h4>
            <p class="body-2">群号：{{v.qq}}</p>
            <p class="body-2">部长：{{v.minister}}</p>
            <p class="body-2">部长QQ：{{v.mqq}}</p>
            <a download :href="v.src" class="caption white--text">点击下载二维码</a>
          </v-flex>
        </v-expand-transition>
      </v-img>
    </v-hover>
  </v-flex>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Depart",
  computed: {
    ...mapState(["depart"])
  }
};
</script>

<style scoped>
.depart {
  background-color: white;
  color: #333;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
  padding: 15px 0;
}
.img {
  margin: 10px auto;
}
.hover {
  background-color: #1976d29f;
  height: 100%;
  color: white;
}
</style>