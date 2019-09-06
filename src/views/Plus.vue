<template>
  <v-container>
    <vue-typed-js class="primary--text mb-6 body-2" :strings="strings" :backSpeed="30">
      <span class="typing"></span>
    </vue-typed-js>
    <add />
    <to-link :right="{to: '/inquiry', link: '查询报名状态'}" :left="{to: '/pre', link: '部门招新群'}" />
  </v-container>
</template>

<script>
import ToLink from "@/components/ToLink";
import Add from "@/components/Add";

import Vue from "vue";
import VueTypedJs from "vue-typed-js";

Vue.use(VueTypedJs);

export default {
  name: "Plus",
  components: {
    ToLink,
    Add
  },
  data: () => ({
    strings: [
      "果然科协还是很有吸引力吧！",
      "多参加几个部门还能收获更多知识呢~",
      "但为了录取更多想来科协的小伙伴",
      "总共只能报三个部门哦~",
      "可以先加入部门招新群咨询",
      "考虑清楚再选择喜欢的部门~",
      "科协还会有所有部门参与的集体活动",
      "同样可以接触到更多人更多方面知识~",
      "最后欢迎报名科协！",
      "比心~(｡･ω･｡)ﾉ♡"
    ]
  })
};
</script>