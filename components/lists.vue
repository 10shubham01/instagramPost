<template>
  <div class="container">
    <card v-for="post in posts" :key="post.id" :initialData="post" />
  </div>
</template>
<script>
import axios from "axios";
import card from "./card.vue";
export default {
  components: {
    card,
  },
  name: "lists",
  data: () => ({
    posts: [],
  }),
  async created() {
    const api = "https://jsonplaceholder.typicode.com/posts";
    const posts = await axios.get(api).then((resp) => resp.data);
    this.posts = posts;
  },
};
</script>
<style>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1%;
  height: 90vh;
  width: 100%;
  background: orange;
  overflow: auto;
}
</style>