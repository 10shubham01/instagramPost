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
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import axios from "axios";
import card from "./card.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    card,
  },
  name: "lists",
  data: () => ({
    snackbar: false,
    text: "Card Deleted",
    timeout: 2000,
  }),
  methods: {
    async deleteCard(id) {
      const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
      await axios.delete(api).then((resp) => resp.data);
      this.$store.commit("removePost", id);
      this.snackbar = true;
    },
    async filterCard(id) {
      const api = `https://jsonplaceholder.typicode.com/posts?title=${id}`;
      const filteredCard = await axios.get(api).then((resp) => resp.data);
      this.posts = filteredCard;
    },
    search: function (e) {
      if (e.keyCode == 13) {
        this.filterCard(e.target.value);
      }
    },
  },
  computed: {
    ...mapGetters(["posts"]),
  },

  mounted() {
    this.$store.dispatch("loadPosts");
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