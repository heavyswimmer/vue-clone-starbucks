<template>
  <div class="home">
    <EventList/>
    <MainFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from '../components/main/cSU_EventList.vue'
import MainFooter from '../components/main/cSU_MainFooter.vue'

export default {
  name: 'HomeView',
  components: {
    EventList,
    MainFooter
  }
}
</script>
