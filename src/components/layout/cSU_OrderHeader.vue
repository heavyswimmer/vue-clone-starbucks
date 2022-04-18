<template>
  <header class="navbar" :class="{ 'navbar--hidden': !showNavBar }">
    <button type="button" @click="goBack">
      <img class="left-arrow-icon" src="../../assets/image/icon/left-arrow.png" alt="LeftArrowIcon"/>
    </button>
    <p class="header-title">음료</p>
    <button type="button" @click="openModal">
      <img class="search-icon" src="../../assets/image/icon/search.png" alt="SearchIcon">
    </button>
  </header>
</template>

<script>
export default {
  name: 'OrderHeader',
  props: {
    modalShowYn: Boolean
  },
  data () {
    return {
      showNavBar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    openModal () {
      this.$emit('openModal')
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped>
  button {
    cursor: pointer;
    border: hidden;
    background-color: transparent;
    display: flex;
    justify-content: center;
  }
  header {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    padding: 10px;
  }
  .navbar {
    /* box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5); */
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
  }
  .navbar.navbar--hidden {
    /* box-shadow: none; */
    transform: translate3d(0, -100%, 0);
  }
  .header-title {
    font-size: 1.2rem;
  }
  .search-icon {
    width: 25px;
    height: 25px;
  }
  .left-arrow-icon {
    width: 20px;
    height: 20px;
  }
</style>
