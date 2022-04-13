<template>
  <section class="event-list-area">
    <h2>What's New</h2>
    <div class="event-container">
      <ul :style="setTotalWidthStyle" class="content-box">
        <li :style="setWidthStyle" class="content" v-for="(value, index) in contentsList" :key="index">
          <img class="content-image" src="{{ value.imgUrl }}" alt="">
          <strong class="content-title">{{ value.title }}</strong><br/>
          <p class="content-body">{{ value.body }}</p>
          <!-- <span>{{ value.coffeeSticker }}</span> -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      contentsList: {},
      contentsBoxWidth: 500
    }
  },
  mounted () {
    this.getContentsList()
  },
  computed: {
    setWidthStyle () {
      return {
        '--contentsBoxWidth': this.contentsBoxWidth + 'px'
      }
    },
    setTotalWidthStyle () {
      return {
        '--totalWidth': (this.contentsBoxWidth + 10) * this.contentsList.length + 30 + 'px'
      }
    }
  },
  methods: {
    getContentsList () {
      var param = new Object()
      //위 내용 주석 풀고 사용 (this.coffeesNameVal, this.stickerVal은 v-model을 통해 받았을 것)
      this.$axios.post('/saeum/startProject/getContentsList', param)
      .then((response) => {
        this.contentsList = response.data
        // alert(response.data[2].coffeeSticker)
      }).catch((error) => {
        console.warn('ERROR!!!!! : ', error)
      })
    }
  }
}
</script>

<style scoped>
  .event-list-area {
    width: 100%;
    height: 100vh;
    padding: 10px 0px 10px 23px;
    /* border: 1px solid #000; */
  }
  .event-list-area h2 {
    text-align: left;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
  }
  .event-container {
    margin: 0 auto;
    padding: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    height: 180px;
  }
  .content-box {
    width: var(--totalWidth);
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0px;
  }
  .content {
    /* position: absolute; */
    width: var(--contentsBoxWidth);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .content-image {
    height: 150px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .content-title {
    font-size: 1.05rem;
    line-height: 35px;
  }
  .content-body {
    font-weight: 200;
    font-size: 0.8rem;
    color: rgb(95, 95, 95);
  }
</style>
