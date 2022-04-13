<template>
  <nav class="footer">
    <router-link to="/home"><img src="../../assets/image/icon/homeIconSelected.png" alt="HomeIcon" class="footer-icon"></router-link>
    <img src="../../assets/image/icon/payIcon.png" alt="PayIcon" class="footer-icon">
    <router-link to="/order"><img src="../../assets/image/icon/orderIcon.png" alt="OrderIcon" class="footer-icon"></router-link>
    <img src="../../assets/image/icon/giftIcon.png" alt="GiftIcon" class="footer-icon">
    <img src="../../assets/image/icon/otherIcon.png" alt="OtherIcon" class="footer-icon last">
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
 .footer {
   width: 100%;
   position: fixed;
   bottom: 0;
   left: 0;
   background-color: #f6f6f6;
   opacity: 0.8;
   padding: 7px;
 }

 .footer-icon {
   max-width: 60px;
   margin-right: 15px;
 }

 .footer-icon.last {
   margin-right: 0;
 }

 @media screen and (min-width: 768px) {
   .footer-icon {
     margin-right: 60px;
   }
 }
</style>
