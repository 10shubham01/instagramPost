<template>
  <header>
    <div class="nav-links">
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/addCard">Add card</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",
};
</script>

<style scoped>
header {
  position: fixed;
  height: 8vh;
  background: #eee;
  box-shadow: 0 0 10px black;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
}
.nav-links {
  height: 100%;
  width: 20%;
}
.nav-links > ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background: red; */
}
a {
  text-decoration: none;
  color: black;
}
.nav-links > ul > li {
  list-style: none;
}
</style>

