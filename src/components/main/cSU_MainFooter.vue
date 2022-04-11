<template>
  <nav class="footer">
    <router-link to="/home"><img src="../../assets/image/icon/HomeIconSelected.png" alt="HomeIcon" class="footer-icon"></router-link>
    <img src="../../assets/image/icon/PayIcon.png" alt="PayIcon" class="footer-icon">
    <router-link to="/order"><img src="../../assets/image/icon/OrderIcon.png" alt="OrderIcon" class="footer-icon"></router-link>
    <img src="../../assets/image/icon/GiftIcon.png" alt="GiftIcon" class="footer-icon">
    <img src="../../assets/image/icon/OtherIcon.png" alt="OtherIcon" class="footer-icon last">
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
   padding: 7px;
   /* border: 1px solid #000; */
 }

 .footer-icon {
   max-width: 60px;
   margin-right: 18px;
 }

 .footer-icon.last {
   margin-right: 0;
 }
</style>
