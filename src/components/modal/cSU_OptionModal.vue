<template>
  <blackBg @click="closeModal"/>
  <section class="option-modal-container">
    <button @click="closeModal" class="close-btn">X</button>
    <div class="title-container">
      <h4 class="title">{{ detailInfo.coffeeName }}</h4>
      <p class="environment-msg">환경을 위해 일회용컵 사용 줄이기에 동참해 주세요</p>
    </div>
    <div class="size-option-container">
      <h3 class="option-title">사이즈</h3>
      <div class="option size">
        <button :class="{'size-selected': optionSelected.size === 'Tall'}" @click="getSelectedSize(size[0])">
          <img id="tall" src="../../assets/image/icon/cup.png" alt="tall">
          <p>{{ size[0] }}</p>
          <p class="size-measure">355ml</p>
        </button>
        <button :class="{'size-selected': optionSelected.size === 'Grande'}" @click="getSelectedSize(size[1])">
          <img id="grande" src="../../assets/image/icon/cup.png" alt="grande">
          <p>{{ size[1] }}</p>
          <p class="size-measure">473ml</p>
        </button>
        <button :class="{'size-selected': optionSelected.size === 'Venti'}" @click="getSelectedSize(size[2])">
          <img id="venti" src="../../assets/image/icon/cup.png" alt="venti">
          <p>{{ size[2] }}</p>
          <p class="size-measure">591ml</p>
        </button>
      </div>
    </div>
    <div class="cup-option-container">
      <h3 class="option-title">컵 선택</h3>
      <div class="option cup">
        <button :class="{'cup-selected': optionSelected.cup === '매장컵'}" @click="getSelectedCup(cup[0])">{{ cup[0] }}</button>
        <button :class="{'cup-selected': optionSelected.cup === '개인컵'}" @click="getSelectedCup(cup[1])">{{ cup[1] }}</button>
        <button :class="{'cup-selected': optionSelected.cup === '일회용컵'}" @click="getSelectedCup(cup[2])">{{ cup[2] }}</button>
      </div>
    </div>
    <section class="payment-container">
      <div class="calculator">
        <div class="volume-button">
          <button @click="subtractVolume(totalPrice)">-</button>
          <p>{{ volume }}</p>
          <button @click="addVolume(totalPrice)">+</button>
        </div>
        <p class="coffee-price">{{ totalPrice }}원</p>
      </div>
      <div class="payment-btn-container">
        <button class="add-cart-btn">담기</button>
        <cBtn class="order-btn" @click="openResult" btnName="주문하기"></cBtn>
      </div>
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
      optionSelected: { size: 'Tall' },
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
      // if (data === undefined || data === '') {
      //   this.optionSelected.size = this.size[0]
      //   console.log(this.optionSelected)
      // } else {
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
      // }
    },
    getSelectedCup (data) {
      this.optionSelected.cup = data
      console.log(this.optionSelected)
    },
    addVolume (price) {
      this.volume++
      this.totalPrice = price * this.volume
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
    /* justify-content: center; */
    border-radius: 10px;
    padding: 50px 30px 0px;
  }
  .close-btn {
    background-color: var(--light-grey);
    border-radius: 10px;
    color: #fff;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px;
  }
  .title {
    font-weight: 400;
    font-size: 17px;
  }
  .environment-msg {
    margin: 25px 0px;
    padding: 6px;
    font-size: 12px;
    font-weight: 100;
    background-color: var(--light-green);
    color: var(--green);
  }
  .selection {
    text-align: left;
  }
  .option-title {
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .size-option-container {
    margin-bottom: 40px;
  }
  .option.size {
    display: flex;
    justify-content: center;
  }
  .option.size button {
    width: 95px;
    height: 110px;
    border-radius: 10px;
    margin-right: 10px;
  }
  .size-measure {
    font-weight: 100;
  }
  .size-selected {
    border: 2.4px solid var(--green) !important;
  }
  .cup-selected {
    background-color: var(--green) !important;
    color: #fff !important;
  }
  .option button {
    font-weight: 400;
    color: var(--grey);
    padding: 5px 32px;
    background-color: transparent;
    border: 1px solid var(--light-grey);
  }
  .option.cup :first-child {
    border-radius: 30px 0px 0px 30px;
  }
  .option.cup :nth-child(2) {
    border-right: none;
    border-left: none;
  }
  .option.cup :last-child {
    border-radius: 0px 30px 30px 0px;
  }
  .payment-container {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 30px 30px 0px;
    box-shadow: 0 -2px 10px 0 #ddd;
  }
  .calculator {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
  .volume-button {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .coffee-price {
    font-size: 22px;
    width: 50%;
    text-align: right;
  }
  .volume-button button {
    border: 1px solid var(--dark-grey);
    color: var(--dark-grey);
    cursor: pointer;
    background-color: transparent;
    border-radius: 50px;
  }
  .payment-btn-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .add-cart-btn {
    width: 65px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 30px;
    border: 1px solid var(--green);
    color: var(--green);
    margin-right: 10px
  }
  .order-btn {
    width: 130px;
  }
  #tall {
    width: 30px;
  }
  #grande {
    width: 35px;
  }
  #venti {
    width: 40px;
  }
</style>
