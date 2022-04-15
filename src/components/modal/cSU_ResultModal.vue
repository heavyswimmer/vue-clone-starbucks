<template>
  <blackBg></blackBg>
  <section class="order-result-container">
    <h3>주문 결과</h3>
    <p>{{ detailInfo.coffeeName }}</p>
    <p>{{ volume }}</p>
    <p>{{ optionSelected.size }}</p>
    <p>{{ optionSelected.cup }}</p>
    <hr>
    <p>{{ totalPrice }}원</p>
    <cBtn @click="closeResult" btnName="확인"></cBtn>
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
  .order-result-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 10;
    bottom: 0;
    z-index: 9;
    width: 90%;
    height: 30%;
    background-color: #ccc;
  }
</style>
