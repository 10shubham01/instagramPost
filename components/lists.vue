<template>
  <div>
    <v-text-field
      label="Search"
      class="searchBar"
      @keyup="search"
    ></v-text-field>
    <div class="container">
      <card
        v-for="post in posts"
        :key="post.id"
        :initialData="post"
        v-on:deleteCard="deleteCard($event)"
      />
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
  methods: {
    async deleteCard(id) {
      const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
      await axios.delete(api).then((resp) => resp.data);
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    async filterCard(id) {
      console.log(id);
      const api = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
      const filteredCard = await axios.get(api).then((resp) => resp.data);
      this.posts = filteredCard;
    },
    search: function (e) {
      if (e.keyCode == 13) {
        console.log(e.target.value);
        this.filterCard(e.target.value);
      }
    },
  },
  async created() {
    const api = "https://jsonplaceholder.typicode.com/posts";
    const posts = await axios.get(api).then((resp) => resp.data);
    this.posts = posts;
    console.log();
  },
};
</script>
<style scoped>
.container {
  position: absolute;
  top: 16vh;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1%;
  height: 80vh;
  width: 100%;
  overflow: auto;
}
.container::-webkit-scrollbar {
  display: none;
}
.searchBar {
  position: absolute;
  top: 9%;
  left: 0;
  right: 0;
  margin: auto;
  width: 30%;
}
@media (max-width: 700px) {
  .container {
    grid-template-columns: 1fr;
  }
  .searchBar {
    width: 90%;
  }
}
</style>