import axios from "axios";

export const state = () => ({
  posts: [],
});
export const getters = {
  posts: (state) => {
    return state.posts;
  },
};
export const mutations = {
  getData(state, posts) {
    state.posts = posts;
  },
  removePost(state, id) {
    state.posts = state.posts.filter((post) => post.id !== id);
  },
  addPost(state, post) {
    state.posts = [post, ...state.posts];
  },
};
export const actions = {
  async loadPosts({ commit }) {
    const api = "https://jsonplaceholder.typicode.com/posts";
    const posts = await axios.get(api).then((resp) => resp.data);
    commit("getData", posts);
  },
};
