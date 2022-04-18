<template>
  <header class="order-header">
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
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    openModal () {
      this.$emit('openModal')
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    padding: 10px;
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
