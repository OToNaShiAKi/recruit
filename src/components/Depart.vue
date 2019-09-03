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
import office from "@/assets/office.jpg";
import editor from "@/assets/editor.jpg";
import media from "@/assets/media.jpg";
import echo from "@/assets/onecho.jpg";
import bird from "@/assets/bird.jpg";

export default {
  name: "Depart",
  data: () => ({
    depart: [
      {
        name: "策划部",
        qq: "856825452",
        src: office,
        minister: "王浩杉",
        mqq: "1459614249"
      },
      {
        name: "编辑部",
        qq: "806665978",
        src: editor,
        minister: "曹慧琳",
        mqq: "2363111042"
      },
      {
        name: "媒体部",
        qq: "549329474",
        src: media,
        minister: "李欣航",
        mqq: "480169454"
      },
      {
        name: "One Echo",
        qq: "649412658",
        src: echo,
        minister: "吴洛昀",
        mqq: "1220708497"
      },
      {
        name: "雁祉作坊",
        qq: "676212148",
        src: bird,
        minister: "陈鑫"
      }
    ]
  })
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