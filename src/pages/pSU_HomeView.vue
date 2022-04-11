<template>
  <div class="home">
    <ProgressBar/>
    <EventList/>
    <MainFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProgressBar from '../components/main/cSU_ProgressBar.vue'
import EventList from '../components/main/cSU_EventList.vue'
import MainFooter from '../components/main/cSU_MainFooter.vue'

export default {
  name: 'HomeView',
  components: {
    ProgressBar,
    EventList,
    MainFooter
  }
}
</script>
