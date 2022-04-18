<template>
  <section class="search-modal-container">
    <input type="text" v-model="coffeeNameVal" placeholder="음료명을 입력하세요">
    <select placeholder="선택" v-model="coffeeStickerVal">
      <option value="">전체</option>
      <option value="New">New</option>
      <option value="Best">Best</option>
    </select>
    <div class="btn-container">
      <button @click="closeModal" class="cancel-btn">취소</button>
      <cBtn @click="searchCoffee" class="search-btn" btnName="검색"></cBtn>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchModal',
  props: {
    modalShowYn: Boolean
  },
  data () {
    return {
      coffeeNameVal: '',
      coffeeStickerVal: ''
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    },
    searchCoffee () {
      // eslint-disable-next-line no-new-object
      const param = new Object()
      if ((this.coffeeNameVal !== undefined && this.coffeeNameVal !== '')) {
        param.coffeeName = this.coffeeNameVal
      }
      if (this.coffeeStickerVal !== undefined && this.coffeeStickerVal !== '') {
        param.coffeeSticker = this.coffeeStickerVal
      }
      // alert(JSON.stringify(param))
      this.$emit('searchCoffee', param)
    }
  }
}
</script>

<style scoped>
  input, select {
    font-family: 'AppleSDGothicNeo', sans-serif;
    padding: 8px;
    margin-bottom: 15px;
    border: none;
    border-radius: 3px;
    background-color: #eee;
    font-weight: 400;
  }
  .search-modal-container {
    background-color: #fff;
    width: 300px;
    height: 170px;
    border: 1px solid #ccc;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .btn-container {
    display: flex;
    justify-content: end;
  }
  .btn-container button {
    font-family: 'AppleSDGothicNeo', sans-serif;
    width: 50px;
    height: 30px;
    border-radius: 30px;
    border: 2px solid var(--green);
  }
  .cancel-btn {
    cursor: pointer;
    color: var(--green);
    margin-right: 7px;
  }
</style>
