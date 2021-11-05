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

        <v-btn @click="onBtnClickUpdate" depressed color="primary">
          Update Card
        </v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
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
    onBtnClickUpdate() {
      this.updateCard(this.post);
    },
  },
  async created() {
    const api = `https://jsonplaceholder.typicode.com/posts/${this.$route.params.updateCard}`;
    const post = await axios.get(api).then((resp) => resp.data);
    this.post.title = post.title;
    this.post.body = post.body;
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