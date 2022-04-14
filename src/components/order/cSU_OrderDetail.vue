<template>
  <button @click="backToList" class="left-arrow-icon">
    <img src="../../assets/image/icon/leftArrowWhite.png" alt="left-arrow">
  </button>
  <div class="coffee-img">
    <img src="detailInfo.imgUrl" alt="coffee-img">
  </div>
  <section class="coffee-detail-container">
    <div class="coffee-title-container">
      <h3 class="coffee-title">{{ detailInfo.coffeeName }}</h3>
      <span>{{ detailInfo.coffeeSticker }}</span>
    </div>
    <p class="coffee-en-name">
      {{ detailInfo.coffeeEnName }}
    </p>
    <p class="coffee-detail">
      {{ detailInfo.coffeeDetail }}
    </p>
    <p class="coffee-price">
      {{ detailInfo.coffeePrice }}원
    </p>
    <div class="coffee-type">
      {{ detailInfo.coffeeType }}
    </div>
    <p class="coffee-comment" v-html="detailInfo.comment"></p>
  </section>
  <div class="order-btn-container">
    <cBtn class="order-btn" btnName="주문하기"></cBtn>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  props: {
    detailInfo: Object
  },
  methods: {
    backToList () {
      this.$emit('backToList')
    }
  }
}
</script>

<style scoped>
  .left-arrow-icon {
    cursor: pointer;
    padding: 20px 0px 0px 15px;
    position: fixed;
    display: flex;
    align-self: center;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
  }
  .left-arrow-icon img {
    width: 17px;
    height: 17px;
  }
  .coffee-img {
    background-color: #ccc;
    width: 100%;
    height: 35vh;
    border: 1px solid #ccc;
  }
  .coffee-title {
    font-size: 20px;
    font-weight: 500;
  }
  .coffee-detail-container {
    padding: 20px;
    text-align: left;
  }
  .coffee-title-container {
    display: flex;
    margin-bottom: 3px;
  }
  .coffee-en-name {
    color: #9E9E9E;
    font-size: 13px;
    margin-bottom: 10px;
  }
  .coffee-detail {
    margin-bottom: 20px;
    font-size: 13px;
    font-weight: 200;
    color: #676767;
  }
  .coffee-price {
    /* font-family: 'Avenir', 'AppleSDGothicNeo', sans-serif; */
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .coffee-comment {
    font-size: 12px;
    font-weight: 200;
    padding: 15px;
    color: #676767;
    background-color: #F7F7F7;
  }
  .coffee-type {
    margin-bottom: 10px;
  }
  .order-btn-container {
    position: fixed;
    bottom: 0;
    z-index: 2;
    background-color: #fff;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .order-btn {
    width: 300px;
    position: relative;
    bottom: 5px;
  }
</style>
