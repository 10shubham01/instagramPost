<template>
  <div class="container">
    <v-form>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="post.title"
            label="Title"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="post.body"
            label="Body"
            required
          ></v-text-field>
        </v-col>

        <v-btn @click="onBtnClick" depressed color="primary"> Add Card </v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
      newCard: {},
    };
  },
  methods: {
    async postData(body) {
      const api = "https://jsonplaceholder.typicode.com/posts";
      const newCard = await axios
        .post(api, body, {
          "Content-type": "application/json; charset=UTF-8",
        })
        .then((resp) => resp.data);
      this.$store.commit("addPost", newCard);
    },

    onBtnClick: function (e) {
      e.preventDefault();
      this.postData({ ...this.post, userId: uuidv4() });
      this.post = {};
    },
  },
};
</script>
<style scoped>
.container {
  position: absolute;
  width: 50%;
  top: 30%;
  right: 0;
  left: 0;
  margin: auto;
  height: 20vh;
}
@media (max-width: 700px) {
  .container {
    width: 100%;
  }
}
</style>