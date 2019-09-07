<template>
  <v-simple-table class="my-3 py-3">
    <caption class="body-2">{{title | depart}}</caption>
    <thead>
      <th>Name</th>
      <th>Tel</th>
      <th>QQ</th>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.uid">
        <td>{{ item.name }}</td>
        <td>{{ item.tel }}</td>
        <td>{{ item.qq }}</td>
      </tr>
    </tbody>
    <small class="caption float-right">总数：{{desserts.length}}</small>
  </v-simple-table>
</template>

<script>
export default {
  name: "FormList",
  props: {
    desserts: {
      required: true,
      type: Array
    },
    title: {
      required: true,
      type: String
    }
  }
};
</script>