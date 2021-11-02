<template>
  <div>
    <appHeader />
    <lists />
    <Nuxt />
  </div>
</template>
<script>
import appHeader from "../components/appHeader.vue";
import lists from "../components/lists.vue";
export default {
  components: {
    appHeader,
    lists,
  },
};
</script>

<style>
