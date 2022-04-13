<template>
  <section class="home">
    <MainTitle/>
    <ProgressBar/>
    <EventSlide/>
    <HomeFooter/>
  </section>
</template>

<script>
import HomeFooter from '../components/layout/cSU_HomeFooter.vue'
import MainTitle from '../components/home/cSU_MainTitle.vue'
import ProgressBar from '../components/home/cSU_ProgressBar.vue'
import EventSlide from '../components/home/cSU_EventSlide.vue'

export default {
  name: 'HomeView',
  components: {
    MainTitle,
    ProgressBar,
    EventSlide,
    HomeFooter
  }
}
</script>
