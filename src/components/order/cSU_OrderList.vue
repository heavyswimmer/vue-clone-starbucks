<template>
  <SearchModal @closeModal="closeModal" @searchCoffee="getCoffeeList" :modalShowYn="modalShowYn" class="search-modal" v-show="modalShowYn"/>
  <ul class="coffee-menu-list" v-show="listShowYn">
    <OrderHeader class="order-header" @openModal="openModal" :modalShowYn="modalShowYn"/>
    <li @click="openDetail(value)" class="coffee-menu" v-for="(value, index) in coffeeList" :key="index">
      <img class="coffee-image" :src="value.imgPath" alt="menuImg">
      <div class="coffee-info">
        <div class="coffee-title">
          <h3 class="coffee-name">{{ value.coffeeName }}</h3>
          <span :class="{'best-label': value.coffeeSticker === 'best', 'new-label': value.coffeeSticker === 'new'}">{{ value.coffeeSticker }}</span>
        </div>
        <p class="coffee-en-name">{{ value.coffeeEnName }}</p>
        <p class="coffee-price">{{ value.coffeePrice }}원</p>
      </div>
    </li>
  </ul>
  <OrderDetail class="order-detail-info" @backToList="backToList" :detailInfo="detailInfo" v-if="detailShowYn"/>
</template>

<script>
import OrderHeader from '../../components/layout/cSU_OrderHeader.vue'
import SearchModal from '../../components/modal/cSU_SearchModal.vue'
import OrderDetail from '../../components/order/cSU_OrderDetail.vue'

export default {
  name: 'OrderList',
  components: {
    OrderHeader,
    SearchModal,
    OrderDetail
  },
  data () {
    return {
      modalShowYn: false,
      listShowYn: true,
      detailShowYn: false,
      coffeeList: {},
      detailInfo: ''
    }
  },
  mounted () {
    this.getCoffeeList()
  },
  methods: {
    openModal () {
      this.modalShowYn = true
    },
    closeModal () {
      this.modalShowYn = false
    },
    openDetail (coffee) {
      // 수정 요
      this.listShowYn = false
      this.modalShowYn = false
      this.detailShowYn = true
      this.detailInfo = coffee
    },
    backToList () {
      this.listShowYn = true
      this.detailShowYn = false
    },
    getCoffeeList (coffee) {
      /* eslint-disable */
      let param = new Object()
      if (coffee) { // 선택된 커피값이 있으면
        param = coffee // 파라미터에 커피값을 넣어라
      }
      // param.coffeeName = this.coffeeNameVal
      // param.coffeeSticker = this.stickerVal
      this.$axios.post('/saeum/startProject/getCoffeeList', param)
      .then((response) => {
        this.coffeeList = response.data
        // alert(response.data[1].imgUrl)
      }).catch((error) => {
        console.warn('ERROR!!!!! : ', error)
      })
      this.modalShowYn = false
    }
  }
}
</script>

<style scoped>
  .order-detail-info {
    position: absolute;
    top: 0;
    left: 0;
  }
  .order-header {
    z-index: 3;
  }
  .search-modal {
    position: absolute;
    right: 5px;
    top: 55px;
    z-index: 3;
  }
  .order-detail-info {
    position: absolute;
  }
  .coffee-menu-list {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    line-height: 25px;
  }
  .coffee-menu {
    cursor: pointer;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    padding-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 70px;
  }
  .coffee-info {
    width: 250px;
    /* height: 100px; */
    display: flex;
    flex-direction: column;
    line-height: 30px;
  }
  .coffee-title {
    display: flex;
    flex-direction: row;
  }
  .coffee-image {
    width: 80px;
    height: 80px;
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
  .coffee-title span {
    margin-left: 7px;
    font-family: 'Cavolini', serif;
    font-size: 3px;
  }
  .best-label {
    color: #C8443A;
  }
  .new-label {
    color: #00A862;
  }
</style>
