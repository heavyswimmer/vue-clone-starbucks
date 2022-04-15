<template>
  <button class="common-btn">{{ btnName }}</button>
</template>

<script>
export default {
  props: {
    btnName: {}
  }
}
</script>

<style scoped>
  .common-btn {
    font-family: 'AppleSDGothicNeo', sans-serif;
    font-weight: 300;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 37px;
    background-color: #00A862;
    color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 14px;
  }
</style>
