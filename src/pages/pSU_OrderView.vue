<template>
  <section class="order">
    <OrderList/>
  </section>
</template>

<script>
import OrderList from '../components/order/cSU_OrderList.vue'

export default {
  name: 'OrderView',
  components: {
    OrderList
  }
}
</script>
