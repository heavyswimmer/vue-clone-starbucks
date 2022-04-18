<template>
  <section class="progress-container">
    <div class="progress-bar-container">
      <p class="progress-status">20★ until Gold Level</p>
      <div class="progress-bar">
        <div class="progress-color-bar"></div>
      </div>
    </div>
    <div class="point">5
      <span class="slash">/ </span>
      <span class="emphasis">25★</span>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
  .progress-container {
    display: flex;
    flex-direction: row;
    padding: 25px;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #000; */
  }
  .progress-status {
    font-size: 0.9rem;
    color: var(--green);
    /* padding-left: 20px; */
    text-align: left;
    margin-bottom: 10px;
  }
  .progress-bar-container {
    display: flex;
    flex-direction: column;
  }
  .progress-bar {
    background-color: #eee;
    border-radius: 30px;
    width: 230px;
    height: 8px;
  }
  .progress-color-bar {
    background-color: var(--green);
    border-radius: 30px;
    width: 0%;
    height: 8px;
  }
  .point {
    /* font-family: 'Avenir', sans-serif; */
    font-size: 2rem;
    font-weight: 500;
  }
  .slash {
    font-size: 1.4rem;
    color: #ccc;
  }
  .emphasis {
    font-size: 1.4rem;
    color: var(--green);
  }

  @media screen and (min-width: 768px) {
    .progress-bar {
      width: 600px;
    }
    .progress-color-bar {
      width: 80px;
    }
  }
</style>
