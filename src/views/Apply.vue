<template>
  <v-container fluid>
    <v-text-field v-model="name.model" :error-messages="name.text" label="姓名" />
    <v-text-field
      v-model="uid.model"
      :error-messages="uid.text"
      type="tel"
      maxlength="9"
      label="学号"
      prepend-inner-icon="U"
    />
    <v-text-field
      v-model="tel.model"
      :error-messages="tel.text"
      type="tel"
      maxlength="11"
      label="电话"
    />
    <v-text-field v-model="qq.model" :error-messages="qq.text" type="tel" label="QQ" />
    <v-select
      v-model="depart.model"
      :error-messages="depart.text"
      :items="states"
      small-chips
      label="选择部门"
      multiple
      chips
      :counter="3"
    ></v-select>
    <v-btn @click="sub" :disabled="error" class="mt-4" outlined block color="primary">提交</v-btn>
    <to-link :right="{to: '/inquiry', link: '查询报名状态'}" :left="{to: '/pre', link: '部门招新群'}" />
  </v-container>
</template>

<script>
import ToLink from "@/components/ToLink";

export default {
  name: "Apply",
  data: () => ({
    states: [
      { text: "策划部", value: "office" },
      { text: "媒体部", value: "media" },
      { text: "编辑部", value: "editor" },
      { text: "One Echo", value: "echo" },
      { text: "雁祉作坊", value: "bird" }
    ],
    name: { model: "", text: "" },
    uid: { model: "", text: "" },
    tel: { model: "", text: "" },
    qq: { model: "", text: "" },
    depart: { model: [], text: "" }
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
    },
    "tel.model"(n) {
      let tel = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      if (tel.test(n)) this.tel.text = "";
      else this.tel.text = "请输入正确手机号";
    },
    "qq.model"(n) {
      let qq = /^[1-9][0-9]{4,}$/;
      if (qq.test(n)) this.qq.text = "";
      else this.qq.text = "请输入正确QQ号";
    },
    "depart.model"(n) {
      if (!n.length) this.depart.text = "请至少选择一个部门";
      else if (n.length > 3) this.depart.text = "最多可选择三个部门";
      else this.depart.text = "";
    }
  },
  computed: {
    error() {
      let uid = /^201[7-9]10[0|1][0-9][0-9]$/;
      let tel = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      let qq = /^[1-9][0-9]{4,}$/;
      let dis =
        this.name.model.length &&
        uid.test(this.uid.model) &&
        tel.test(this.tel.model) &&
        qq.test(this.qq.model) &&
        this.depart.model.length <= 3 &&
        this.depart.model.length;
      return !dis;
    }
  },
  methods: {
    sub() {
      this.$store.dispatch("sub", {
        name: this.name.model,
        uid: this.uid.model,
        tel: this.tel.model,
        qq: this.qq.model,
        depart: this.depart.model
      });
    }
  },
  created() {
    this.name.model = this.$store.state.name;
    this.uid.model = this.$store.state.uid;
  }
};
</script>