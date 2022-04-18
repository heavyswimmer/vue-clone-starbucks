<template>
  <footer>
    <router-link to="/"><img src="../../assets/image/icon/home.png" alt="HomeIcon" class="footer-icon"></router-link>
    <img src="../../assets/image/icon/pay.png" alt="PayIcon" class="footer-icon">
    <router-link to="/order"><img src="../../assets/image/icon/order.png" alt="OrderIcon" class="footer-icon"></router-link>
    <img src="../../assets/image/icon/gift.png" alt="GiftIcon" class="footer-icon">
    <img src="../../assets/image/icon/other.png" alt="OtherIcon" class="footer-icon last">
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
 footer {
   width: 100%;
   position: fixed;
   bottom: 0;
   left: 0;
   background-color: #f6f6f6;
   opacity: 0.9;
   padding-top: 5px;
 }

 .footer-icon {
   max-width: 50px;
   margin-right: 15px;
 }

 .footer-icon.last {
   margin-right: 0;
 }

 @media screen and (min-width: 768px) {
   .footer-icon {
     max-width: 70px;
     margin-right: 60px;
   }
 }
</style>
