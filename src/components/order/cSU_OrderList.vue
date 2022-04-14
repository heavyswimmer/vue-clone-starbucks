<template>
  <SearchModal @closeModal="closeModal" @searchCoffee="getCoffeeList" :searchModalShowYn="searchModalShowYn" class="search-modal" v-show="searchModalShowYn"/>
  <ul class="coffee-menu-list" v-show="listShowYn">
    <OrderHeader @openModal="openModal" :searchModalShowYn="searchModalShowYn"/>
    <li @click="openDetail(value)" class="coffee-menu" v-for="(value, index) in coffeeList" :key="index">
      <img class="coffee-image" src="{{ value.imgUrl }}" alt="menuImg">
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
  <OrderDetail :detailInfo="detailInfo" v-if="detailShowYn"/>
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
      searchModalShowYn: false,
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
      this.searchModalShowYn = true
    },
    closeModal () {
      this.searchModalShowYn = false
    },
    openDetail (coffee) {
      this.listShowYn = false
      this.detailShowYn = true
      this.detailInfo = coffee
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
      this.searchModalShowYn = false
    }
  }
}
</script>

<style scoped>
  .search-modal {
    position: absolute;
    right: 5px;
    top: 55px;
    z-index: 3;
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
