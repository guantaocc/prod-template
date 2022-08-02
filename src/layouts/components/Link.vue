<template>
  <router-link :to="to"></router-link>
</template>

<script>
export default {
  name: "AppLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
