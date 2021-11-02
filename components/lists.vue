<template>
  <div class="container">
    <card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
    />
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
    valid: false,
    firstname: "",
    lastname: "",

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
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