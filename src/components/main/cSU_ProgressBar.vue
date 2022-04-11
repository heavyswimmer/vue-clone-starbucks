<template>
  <section class="landing">
    <div class="landing-title">
      <h1>머그컵으로<br/>
      한잔 어떠세요?</h1>
    </div>
    <div class="progress-bar-container">
      <div class="progress-bar"></div>
      <span class="point">5/25</span>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
  .landing {
    border: 1px solid #000;
    padding: 20px;
  }
  .landing-title {
    font-size: 2rem;
    text-align: left;
  }
  .progress-bar-container {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 5px;
  }
  .progress-bar {
    background-color: #eee;
    border-radius: 20px;
    width: 80%;
    height: 10px;
  }
  .point {
    font-size: 2rem;
  }
</style>
