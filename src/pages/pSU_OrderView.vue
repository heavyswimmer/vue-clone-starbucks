<template>
  <section class="order">
    <OrderHeader/>
    <OrderList/>
    <SearchPopup/>
  </section>
</template>

<script>
import OrderHeader from '../components/layout/cSU_OrderHeader.vue'
import OrderList from '../components/order/cSU_OrderList.vue'
import SearchPopup from '../components/modal/cSU_SearchPopup.vue'

export default {
  name: 'OrderView',
  components: {
    OrderHeader,
    OrderList,
    SearchPopup
  }
}
</script>
