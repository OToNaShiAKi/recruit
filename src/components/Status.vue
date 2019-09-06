<template>
  <v-dialog transition="scroll-y-transition" persistent v-model="dialog" max-width="300">
    <v-card>
      <v-card-title class="subtitle-1">欢迎报名科协</v-card-title>
      <v-card-text v-for="v in depart" :key="v.name">
        <div>{{v.name | depart}}：{{v.status}}</div>
        <div v-if="v.test">
          <div v-for="(value, index) in v.test" :key="index">{{value.type}}：{{value.time}}</div>
        </div>
        <div v-else>部门尚未发布面试时间</div>
      </v-card-text>
      <router-link v-if="depart.length < 3" class="caption ml-6" to="/plus">追加报名部门</router-link>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" text @click="back">返回</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Status",
  computed: {
    ...mapState(["depart", "dialog"])
  },
  filters: {
    depart(str) {
      if (str == "office") return "策划部";
      else if (str == "echo") return "One Echo";
      else if (str == "bird") return "雁祉作坊";
      else if (str == "media") return "媒体部";
      else if (str == "editor") return "编辑部";
    }
  },
  methods: {
    back() {
      this.$store.commit("dialog", false);
    }
  }
};
</script>