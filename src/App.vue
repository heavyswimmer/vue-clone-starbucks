<template>
  <section class="app-main">
    <router-view/>
  </section>
</template>

<style>
@import '../src/assets/css/default.css';
@import '../src/assets/css/variable.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #ccc; */
}

@media screen and (min-width: 768px) {
  .app-main {
    width: 60%;
  }
}
</style>
