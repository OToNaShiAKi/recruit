<template>
  <v-content class="caption mt-2">
    <router-link to="/game">部门简介</router-link>
    <router-link class="float-right" :to="to">{{link}}</router-link>
  </v-content>
</template>

<script>
export default {
    name: "Link",
    props: {
        to: {
            required: true,
            type: String
        },
        link: {
            required: true,
            type: String
        }
    }
}
</script>