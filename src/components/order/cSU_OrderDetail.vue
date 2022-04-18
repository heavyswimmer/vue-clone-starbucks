<template>
  <button @click="backToList" class="left-arrow-icon">
    <img src="../../assets/image/icon/left-arrow-white.png" alt="left-arrow">
  </button>
  <section class="order-detail-container">
    <img class="coffee-img" :src="detailInfo.imgPath" alt="coffee-img">
    <div class="detail-contents-container">
      <div class="coffee-title-container">
        <h3 class="coffee-title">{{ detailInfo.coffeeName }}</h3>
        <span :class="{'best-label': detailInfo.coffeeSticker === 'best', 'new-label': detailInfo.coffeeSticker === 'new'}">{{ detailInfo.coffeeSticker }}</span>
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
      <button :class="{'hot-only-type': detailInfo.coffeeType === 'hot', 'iced-only-type': detailInfo.coffeeType === 'ice'}" v-if="detailInfo.coffeeType === 'hot' || detailInfo.coffeeType === 'ice'" class="coffee-type"></button>
      <button class="both-hot-type" v-if="detailInfo.coffeeType === 'both'">HOT</button>
      <button class="both-iced-type" v-if="detailInfo.coffeeType === 'both'">ICED</button>
      <p :class="{'coffee-comment': detailInfo.comment !== null}" v-html="detailInfo.comment"></p>
    </div>
  </section>
  <section class="order-btn-container">
    <cBtn @click="openModal" class="order-btn" btnName="주문하기"></cBtn>
  </section>
  <OptionModal @closeModal="closeModal" class="option-modal" :detailInfo="detailInfo" v-if="optionShowYn"/>
</template>

<script>
import OptionModal from '../modal/cSU_OptionModal.vue'

export default {
  name: 'OrderDetail',
  props: {
    detailInfo: Object
  },
  components: {
    OptionModal
  },
  data () {
    return {
      optionShowYn: false,
      type: ''
    }
  },
  methods: {
    backToList () {
      this.$emit('backToList')
    },
    openModal () {
      this.optionShowYn = true
    },
    closeModal () {
      this.optionShowYn = false
    }
    // getCoffeeType (type) {
    //   if (type === 'hot') {
    //     return '../../assets/image/hot-only.png'
    //   } else if (type === 'ice') {
    //     return '../../assets/image/iced-only.png'
    //   }
    // }
  }
}
</script>

<style scoped>
  .order-detail-container {
    background-color: #fff;
    height: 100%;
  }
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
    width: 100%;
    height: 50%;
  }
  .coffee-title {
    font-size: 20px;
    font-weight: 500;
  }
  .detail-contents-container {
    padding: 20px;
    text-align: left;
  }
  .coffee-title-container {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
  }
  .coffee-en-name {
    font-weight: 100;
    font-size: 13px;
    color: #9E9E9E;
    font-size: 13px;
    margin-bottom: 10px;
  }
  .coffee-detail {
    margin-bottom: 20px;
    font-size: 13px;
    font-weight: 200;
    color: var(--dark-grey);
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
    color: var(--dark-grey);
    background-color: #F7F7F7;
  }
  .coffee-type {
    background-color: #fff;
    border: 1px solid var(--light-grey);
    border-radius: 30px;
    padding: 7px;
    margin-bottom: 15px;
  }
  .hot-only-type {
    width: 100%;
  }
  .iced-only-type {
    width: 100%;
  }
  .hot-only-type::after {
    content: 'HOT ONLY';
    color: var(--red);
  }
  .iced-only-type::after {
    content: 'ICED ONLY';
    color: var(--blue);
  }
  .both-hot-type {
    width: 50%;
    background-color: #fff;
    border: 1px solid var(--light-grey);
    border-radius: 30px 0px 0px 30px;
    padding: 7px;
    margin-bottom: 15px;
    color: var(--dark-grey);
    border-right: none;
    /* color: var(--red); */
  }
  .both-iced-type {
    width: 50%;
    background-color: #fff;
    border: 1px solid var(--light-grey);
    border-radius: 0px 30px 30px 0px;
    padding: 7px;
    margin-bottom: 15px;
    color: var(--dark-grey);
    /* color: var(--blue); */
  }
  .both-hot-type:focus {
    background-color: var(--red);
    color: #fff;
  }
  .both-iced-type:focus {
    background-color: var(--blue);
    color: #fff;
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
    width: 320px;
    position: relative;
    bottom: 5px;
  }
  .coffee-title-container span {
    margin-left: 7px;
    font-family: 'Cavolini', serif;
    font-size: 3px;
  }
  .best-label {
    color: var(--red);
  }
  .new-label {
    color: var(--green);
  }

  @media screen and (min-width: 768px) {
    .order-btn-container {
      width: 60%;
      left: 303px;
    }
    .order-btn {
      width: 90%;
    }
  }
</style>
