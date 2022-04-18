<template>
  <section class="event-list-area">
    <div class="list-title-container">
      <h2 class="list-title">What's New</h2>
      <span>See all</span>
    </div>
    <div class="event-container">
      <ul :style="setTotalWidthStyle" class="content-box">
        <li :style="setWidthStyle" class="content" v-for="(value, index) in contentsList" :key="index">
          <img class="content-image" :src="value.imgPath" alt="eventImg">
          <strong class="content-title">{{ checkTitleLength(value.title) }}</strong>
          <p class="content-body">{{ value.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
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
        '--contentsBoxWidth': this.contentsBoxWidth - 250 + 'px'
      }
    },
    setTotalWidthStyle () {
      return {
        '--totalWidth': (this.contentsBoxWidth + 10) * this.contentsList.length + 30 + 'px'
      }
    }
  },
  methods: {
    checkTitleLength (value) {
      const title = value
      return title.length > 16 ? title.replace(title.substr(17), '⋯') : title
    },
    getContentsList () {
      /* eslint-disable */
      let param = new Object()
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
  .list-title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .list-title {
    /* padding-left: 10px; */
    font-family: 'Avenir Black';
    text-align: left;
  }
  .list-title-container span {
    cursor: pointer;
    font-size: 16px;
    font-weight: 200;
    color: var(--green);
    margin-right: 25px;
  }
  .event-list-area {
    width: 100%;
    height: 100vh;
    padding: 10px 0px 10px 23px;
    /* border: 1px solid #000; */
  }
  .event-container {
    margin: 0 auto;
    padding: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
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
    width: var(--contentsBoxWidth);
    height: 50%;
    padding: 10px 10px 20px 0px;
    margin-right: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  .content-image {
    width: 100%;
    height: 50%;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .content-title {
    /* width: 100%; */
    font-family: 'Avenir Black', 'AppleSDGothicNeo';
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 35px;
  }
  .content-body {
    width: 100%;
    font-weight: 200;
    font-size: 0.8rem;
    color: rgb(95, 95, 95);
  }
</style>
