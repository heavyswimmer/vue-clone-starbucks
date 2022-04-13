<template>
  <section class="detail-container">
    <div class="order-btn-container">
      <cBtn class="order-btn" btnName="주문하기"></cBtn>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderDetail',
  props: {
    coffeeList: Object
  },
  data () {
    return {
      coffeeNameVal: ''
    }
  }
}
</script>

<style scoped>
  .order-btn-container {
    /* position: fixed; */
    bottom: 0;
    z-index: 9;
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
