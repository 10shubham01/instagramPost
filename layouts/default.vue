<template>
  <v-app>
    <appHeader />
    <Nuxt />
  </v-app>
</template>
<script>
import appHeader from "../components/appHeader.vue";
export default {
  components: {
    appHeader,
  },
};
</script>

<style scoped>
</style>
