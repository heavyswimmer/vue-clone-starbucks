<template>
  <button class="commonBtn">{{ btnName }}</button>
</template>

<script>
export default {
  props: {
    btnName: {}
  }
}
</script>

<style scoped>
  .commonBtn {
    font-family: 'AppleSDGothicNeo', sans-serif;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 33px;
    background-color: #00A862;
    color: #fff;
    border: none;
    border-radius: 30px;
  }
</style>
