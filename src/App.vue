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
  letter-spacing: -0.01;
}
@font-face {
  font-family: 'AppleSDGothicNeo';
  src: url('assets/fonts/AppleSDGothicNeoH.ttf') format('truetype');
  font-weight: 600;
}
@font-face {
  font-family: 'AppleSDGothicNeo';
  src: url('assets/fonts/AppleSDGothicNeoEB.ttf') format('truetype');
  font-weight: 500;
}
@font-face {
  font-family: 'AppleSDGothicNeo';
  src: url('assets/fonts/AppleSDGothicNeoB.ttf') format('truetype');
  font-weight: 400;
}
@font-face {
  font-family: 'AppleSDGothicNeo';
  src: url('assets/fonts/AppleSDGothicNeoM.ttf') format('truetype');
  font-weight: 200;
}
@font-face {
  font-family: 'AppleSDGothicNeo';
  src: url('assets/fonts/AppleSDGothicNeoL.ttf') format('truetype');
  font-weight: 100;
}
@font-face {
  font-family: 'Avenir Black';
  src: url('assets/fonts/AvenirLTStd-Black.otf') format('opentype');
  font-weight: 900;
}
@font-face {
  font-family: 'Avenir Book';
  src: url('assets/fonts/AvenirLTStd-Book.otf') format('opentype');
  font-weight: 400;
}
@font-face {
  font-family: 'Avenir Roman';
  src: url('assets/fonts/AvenirLTStd-Roman.otf') format('opentype');
  font-weight: 500;
}
@font-face {
  font-family: 'Cavolini';
  src: url('assets/fonts/CAVOLINIITALIC.TTF') format('truetype');
  font-weight: normal;
}
#app {
  font-family: 'Avenir', 'AppleSDGothicNeo', sans-serif;
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
ul {
  list-style-type: none;
  padding-left: 0;
}

@media screen and (min-width: 768px) {
  .app-main {
    width: 60%;
  }
}
</style>
