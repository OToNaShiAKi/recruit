<template>
  <v-container>
    <v-text-field v-model="name.model" :error-messages="name.text" label="姓名" />
    <v-text-field
      v-model="uid.model"
      :error-messages="uid.text"
      type="tel"
      maxlength="9"
      label="学号"
      prepend-inner-icon="U"
    />
    <v-btn @click="search" :disabled="error" class="mt-4" outlined block color="primary">查询报名状态</v-btn>
    <to-link to="/apply" link="返回报名" />
  </v-container>
</template>

<script>
import ToLink from "@/components/ToLink";

export default {
  name: "Field",
  data: () => ({
    name: { model: "", text: "" },
    uid: { model: "", text: "" }
  }),
  components: {
    ToLink
  },
  watch: {
    "name.model"(n) {
      if (n.length) this.name.text = "";
      else this.name.text = "姓名不可为空";
    },
    "uid.model"(n) {
      let uid = /^201[7-9]10[0|1][0-9][0-9]$/;
      if (uid.test(n)) this.uid.text = "";
      else this.uid.text = "请输入正确学号";
    }
  },
  computed: {
    error() {
      let uid = /^201[7-9]10[0|1][0-9][0-9]$/;
      let dis = this.name.model.length && uid.test(this.uid.model);
      return !dis;
    }
  },
  created() {
    this.name.model = this.$store.state.name;
    this.uid.model = this.$store.state.uid;
  },
  methods: {
    search() {
      this.$store.dispatch("search", {
        name: this.name.model,
        uid: this.uid.model
      });
    }
  }
};
</script>