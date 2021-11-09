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
        @deleteCard="deleteCard($event)"
      />
    </div>
    <snackbar :snackbar="snackbar" :text="'Card Deleted'" :timeout="2000" />
  </div>
</template>
<script>
import axios from "axios";
import card from "./card.vue";
import snackbar from "./snackbar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    card,
    snackbar,
  },

  name: "lists",

  data() {
    return {
      snackbar: false,
    };
  },

  created() {
    this.$store.dispatch("loadPosts");
  },

  computed: {
    ...mapGetters(["posts"]),
  },

  methods: {
    async deleteCard(id) {
      const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
      await axios.delete(api).then((resp) => resp.data);
      this.$store.commit("removePost", id);
      this.snackbar = true;
    },
    search(e) {
      this.$store.commit("getSearchValue", e.target.value);
    },
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