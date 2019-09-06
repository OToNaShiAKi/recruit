<template>
  <section>
    <v-select
      v-model="plus"
      :error-messages="text"
      :items="states"
      small-chips
      label="选择部门"
      multiple
      chips
      :counter="3 - depart.length"
    ></v-select>
    <v-btn @click="add" :disabled="error" class="mt-4" outlined block color="primary">提交</v-btn>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Add",
  data: () => ({
    plus: [],
    text: ""
  }),
  computed: {
    ...mapState(["depart", "uid"]),
    error() {
      let dis = this.plus.length + this.depart.length <= 3 && this.plus.length;
      return !dis;
    },
    status() {
      const status = [
        { text: "策划部", value: "office" },
        { text: "媒体部", value: "media" },
        { text: "编辑部", value: "editor" },
        { text: "One Echo", value: "echo" },
        { text: "雁祉作坊", value: "bird" }
      ];
      return status.filter(v => {
        for (let value of this.depart) if (value.name == v.value) return false;
        return true;
      });
    }
  },
  watch: {
    plus(n) {
      if (!n.length) this.text = "请至少选择一个部门";
      else if (n.length + this.depart.length > 3)
        this.text = "报名总数为三个部门";
      else this.text = "";
    }
  },
  methods: {
    add() {
      this.$store.dispatch("plus", {
        uid: this.uid,
        plus: this.plus
      });
    }
  }
};
</script>