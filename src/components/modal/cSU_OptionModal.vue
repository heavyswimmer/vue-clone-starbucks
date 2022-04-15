<template>
  <blackBg @click="closeModal"/>
  <section class="option-modal-container">
    <button @click="closeModal" class="close-btn">X</button>
    <div class="title-container">
      <h4>{{ detailInfo.coffeeName }}</h4>
      <p class="environment-msg">환경을 위해 일회용컵 사용 줄이기에 동참해 주세요</p>
    </div>
    <div class="size-option-container">
      <h3 class="option-title">사이즈</h3>
      <div class="option">
        <button @click="getSelectedSize(size[0])">{{ size[0] }}</button>
        <button @click="getSelectedSize(size[1])">{{ size[1] }}</button>
        <button @click="getSelectedSize(size[2])">{{ size[2] }}</button>
      </div>
    </div>
    <div class="cup-option-container">
      <h3 class="option-title">컵 선택</h3>
      <div class="option">
        <button @click="getSelectedCup(cup[0])">{{ cup[0] }}</button>
        <button @click="getSelectedCup(cup[1])">{{ cup[1] }}</button>
        <button @click="getSelectedCup(cup[2])">{{ cup[2] }}</button>
      </div>
    </div>
    <section class="payment-container">
      <button @click="subtractVolume(totalPrice)">-</button>
      <p>{{ volume }}</p>
      <button @click="addVolume(totalPrice)">+</button>
      <p class="coffee-price">{{ totalPrice }}원</p>
      <button class="add-cart-btn">담기</button>
      <cBtn @click="openResult" btnName="주문하기"></cBtn>
    </section>
  </section>
  <ResultModal @closeResult="closeResult" :detailInfo="detailInfo" :optionSelected="optionSelected" :totalPrice="totalPrice" :volume="volume" v-if="resultModalShowYn"/>
</template>

<script>
import ResultModal from '../modal/cSU_ResultModal.vue'

export default {
  name: 'OptionModal',
  props: {
    detailInfo: Object
  },
  components: {
    ResultModal
  },
  data () {
    return {
      size: ['Tall', 'Grande', 'Venti'],
      cup: ['매장컵', '개인컵', '일회용컵'],
      optionSelected: {},
      volume: 1,
      sizeSelectedPrice: 0,
      totalPrice: this.detailInfo.coffeePrice,
      resultModalShowYn: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    },
    openResult () {
      if (this.optionSelected.cup === undefined) {
        alert('컵이 선택되지 않았습니다.')
      } else {
        // alert(this.optionSelected)
        this.optionSelected.size = this.size[0]
        this.resultModalShowYn = true
        setTimeout(() => {
          this.closeResult()
        }, 5000)
      }
    },
    closeResult () {
      this.optionSelected = {}
      this.resultModalShowYn = false
    },
    getSelectedSize (data) {
      this.optionSelected.size = data
      console.log(this.optionSelected)
      if (data === 'Grande') {
        this.sizeSelectedPrice = parseInt(this.detailInfo.coffeePrice) + 500
        this.totalPrice = this.sizeSelectedPrice * this.volume
      } else if (data === 'Venti') {
        this.sizeSelectedPrice = parseInt(this.detailInfo.coffeePrice) + 1000
        this.totalPrice = this.sizeSelectedPrice * this.volume
      } else {
        this.sizeSelectedPrice = parseInt(this.detailInfo.coffeePrice)
        this.totalPrice = this.sizeSelectedPrice * this.volume
      }
    },
    getSelectedCup (data) {
      this.optionSelected.cup = data
      console.log(this.optionSelected)
    },
    addVolume (price) {
      this.volume++
      this.totalPrice = this.sizeSelectedPrice * this.volume
    },
    subtractVolume (price) {
      if (this.volume > 1) {
        this.volume--
        this.totalPrice = this.sizeSelectedPrice * this.volume
      }
    }
  }
}
</script>

<style scoped>
  /* div {
    margin: 25px 15px;
  } */
  .option-modal-container {
    position: fixed;
    z-index: 9;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 90vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
  }
  .environment-msg {
    margin: 25px;
    padding: 6px;
    font-size: 12px;
    font-weight: 100;
    background-color: #F1FAF5;
    color: #00A862;
  }
  .selection {
    text-align: left;
  }
  .option-title {
    text-align: left;
  }
  .option {
    display: flex;
    justify-content: center;
  }
  .btn-container {
    display: flex;
    /* justify-content: ; */
  }
  .add-cart-btn {
    cursor: pointer;
    background-color: #fff;
    border-radius: 30px;
    border: 2px solid #00A862;
    color: #00A862;
  }
</style>
