import axios from "axios";

export const state = () => ({
  posts: [],
  searchValue: "",
});
export const getters = {
  posts: (state) => {
    return state.posts.filter((post) => {
      if (state.searchValue === "") {
        return post;
      } else if (
        post.title.toLowerCase().includes(state.searchValue.toLowerCase())
      ) {
        return post;
      }
    });
  },
};
export const mutations = {
  getData(state, posts) {
    if (state.posts.length === 0) state.posts = posts;
  },
  removePost(state, id) {
    state.posts = state.posts.filter((post) => post.id !== id);
  },
  addPost(state, post) {
    state.posts = [post, ...state.posts];
  },
  getSearchValue(state, value) {
    state.searchValue = value;
  },
};
export const actions = {
  async loadPosts({ commit }) {
    const api = "https://jsonplaceholder.typicode.com/posts";
    const posts = await axios.get(api).then((resp) => resp.data);

    commit("getData", posts);
  },
};
/* ------------------------------------------------------------------ */
