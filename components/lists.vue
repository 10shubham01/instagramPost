<template>
  <div>
    <div class="container">
      <card v-for="post in posts" :key="post.id" :initialData="post" />
    </div>
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
<style scoped>
.container {
  position: absolute;
  top: 10vh;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1%;
  height: 85vh;
  width: 100%;
  overflow: auto;
}
.container::-webkit-scrollbar {
  display: none;
}
@media (max-width: 700px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>