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
  methods: {
    back() {
      this.$store.commit("dialog", false);
    }
  }
};
</script>