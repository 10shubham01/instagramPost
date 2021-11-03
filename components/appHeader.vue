<template>
  <header>
    <div class="nav-links">
      <ul>
        <li><nuxt-link to="/">HOME</nuxt-link></li>
        <li><nuxt-link to="/addCard">ADD CARD</nuxt-link></li>
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
  background: #1e1e1e;
  box-shadow: 0 0 10px black;
  display: flex;
  justify-content: space-between;
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
a,
nuxt-link {
  text-decoration: none;
  color: white !important;
}
.nav-links > ul > li {
  list-style: none;
}
@media (max-width: 700px) {
  .nav-links {
    height: 100%;
    width: 90%;
  }
}
</style>

