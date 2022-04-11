<template>
  <section class="app-main">
    <router-view/>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  text-decoration-line: none;
}
@font-face {
  font-family: 'AppleSDGothicNeo';
  src: url('assets/fonts/AppleSDGothicNeoB.ttf') format('truetype');
  font-weight: 400;
}
#app {
  font-family: 'AppleSDGothicNeo', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* width: 100%;
  height: 100%; */
  /* padding: 5%; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-main {
  width: 768px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  border: 1px solid #C6C6C6;
  padding: 5%;
  /* border-radius: 10px; */
}
</style>
