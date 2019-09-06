<template>
  <section class="caption mt-2">
    <router-link :to="left.to">{{left.link}}</router-link>
    <router-link class="float-right" :to="right.to">{{right.link}}</router-link>
  </section>
</template>

<script>
export default {
  name: "Link",
  props: {
    left: {
      required: true,
      type: Object
    },
    right: {
      required: true,
      type: Object
    }
  }
};
</script>