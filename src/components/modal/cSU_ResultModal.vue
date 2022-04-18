<template>
  <blackBg class="black-bg"></blackBg>
  <section class="order-result-container">
    <h3 class="result-title">주문 결과</h3>
    <div class="coffee-info">
      <p class="coffee-name">{{ detailInfo.coffeeName }}</p>
      <span class="coffee-volume">{{ volume }}</span>
    </div>
    <ul class="option-info">
      <li>{{ optionSelected.size }}</li>
      <li>{{ optionSelected.cup }}</li>
    </ul>
    <hr>
    <p class="total-price">{{ totalPrice }}원</p>
    <cBtn class="close-btn" @click="closeResult" btnName="확인"></cBtn>
  </section>
</template>

<script>
export default {
  name: 'ResultModal',
  props: {
    detailInfo: Object,
    optionSelected: Object,
    totalPrice: Number,
    volume: Number
  },
  methods: {
    closeResult () {
      this.$emit('closeResult')
    }
  }
}
</script>

<style scoped>
  .black-bg {
    z-index: 9;
  }
  .order-result-container {
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 30%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 40%;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-weight: 200;
  }
  hr {
    height: 1px;
    background-color: var(--green);
    margin: 10px 0px;
  }
  .result-title {
    font-weight: 500;
    font-size: 20px;
    text-align: left;
    margin-bottom: 10px;
  }
  .coffee-name {
    font-size: 16px;
  }
  .coffee-info {
    font-size: 18px;
    display: flex;
    text-align: left;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .coffee-volume {
    text-align: right;
  }
  .option-info {
    text-align: left;
    list-style-type: '- ';
    padding-left: 20px;
    line-height: 20px;
    font-size: 15px;
  }
  .total-price {
    font-weight: 500;
    font-size: 20px;
    text-align: right;
    margin-bottom: 30px;
  }
  .close-btn {
    width: 65px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0px 20px 20px 0px;
  }
</style>
