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

        <v-btn @click="onClick" depressed color="primary">
          {{ isId ? "Add Card" : "Update Card" }}
        </v-btn>
      </v-row>
    </v-form>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ isId ? textAdd : textUpdate }}

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
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
      isId: false,
      newCard: {},
      snackbar: false,
      textAdd: "Card Added",
      textUpdate: "Card Updated",
      timeout: 2000,
    };
  },
  async created() {
    if (this.$route.params.updateCard) {
      const api = `https://jsonplaceholder.typicode.com/posts/${this.$route.params.updateCard}`;
      const post = await axios.get(api).then((resp) => resp.data);
      this.post.title = post.title;
      this.post.body = post.body;
    } else {
      this.isId = true;
    }
  },

  methods: {
    async updateCard(body) {
      await axios
        .put(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.updateCard}`,
          body
        )
        .then((resp) => resp.data);
    },
    async postData(body) {
      const api = "https://jsonplaceholder.typicode.com/posts";
      const newCard = await axios
        .post(api, body, {
          "Content-type": "application/json; charset=UTF-8",
        })
        .then((resp) => resp.data);
      this.isEdit = true;
      this.$store.commit("addPost", newCard);
    },

    onClick(e) {
      if (this.isId) {
        e.preventDefault();
        this.postData({ ...this.post, userId: uuidv4() });
        this.snackbar = true;
        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      } else {
        this.updateCard(this.post);
        this.snackbar = true;
      }
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