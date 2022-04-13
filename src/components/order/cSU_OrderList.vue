<template>
  <section class="coffee-menu-list">
    <div class="coffee-menu" v-for="(value, index) in coffeeList" :key="index">
      <!-- <img class="coffee-image" src="{{ value.imgUrl }}" alt="coffeeImg"> -->
      <div class="coffee-image"></div>
      <div class="coffee-info">
        <h3 class="coffee-name">{{ value.coffeeName }}</h3>
        <p class="coffee-en-name">{{ value.coffeeEnName }}</p>
        <p class="coffee-price">{{ value.coffeePrice }}원</p>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      coffeeList: {}
    }
  },
  mounted () {
    this.getCoffeeList()
  },
  methods: {
    getCoffeeList () {
      var param = new Object()
      param.coffeeName = this.coffeeNameVal
      param.coffeeSticker = this.stickerVal
      this.$axios.post('/saeum/startProject/getCoffeeList', param)
      .then((response) => {
        this.coffeeList = response.data
        // alert(response.data[1].imgUrl)
      }).catch((error) => {
        console.warn('ERROR!!!!! : ', error)
      })
    }
  }
}
</script>

<style scoped>
  .coffee-menu-list {
    padding: 60px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    line-height: 25px;
  }
  .coffee-menu {
    width: 100%;
    height: 100px;
    /* border: 1px solid #ccc; */
    /* padding: 25px; */
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .coffee-info {
    width: 250px;
    /* height: 100px; */
    display: flex;
    flex-direction: column;
    line-height: 30px;
  }
  .coffee-image {
    width: 80px;
    height: 80px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 15px;
  }
  .coffee-name {
    font-family: 'AppleSDGothicNeo', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
  }
  .coffee-en-name {
    color: #aaa;
    font-weight: 200;
    font-size: 0.8rem;
    line-height: 15px;
  }
  .coffee-price {
    font-family: 'AppleSDGothicNeo', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
  }
</style>
