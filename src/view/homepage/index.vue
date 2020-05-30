<template>
  <div class="main">
    <div class="div1">
      标题测试
    </div>
    <div class="div2">
      <button @click="changeTransform('Y')" style="z-index: 2;">修改Y轴</button>
      <div class="box">
        <div class="row"></div>
        <div class="column"></div>
        <div class="line" id="line"></div>
      </div>
      <button @click="changeTransform('X')" style="z-index: 2;">修改X轴</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '首页',
      x: 0,
      y: 0
    }
  },
  methods: {
    changeTransform (i) {
      var a = document.getElementById('line')
      var _this = this
      if (i === 'X') {
        _this.x = _this.x + 5
        a.style.transform = 'skew(' + _this.x + 'deg,' + _this.y + 'deg)'
      } else if (i === 'Y') {
        _this.y = _this.y + 5
        a.style.transform = 'skew(' + _this.x + 'deg,' + _this.y + 'deg)'
      }
    }
  },
  created () {
    // this.changeTransform()
  }
}
</script>
<style scoped>
  .main {
    width: 100%;
    height: 100%;
    background: whitesmoke;
  }
  .div1 {
    width: 100%;
    height: 20%;
    background: blanchedalmond;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: auto 0; */
    line-height: 1;
  }
  .div2 {
    width: 100%;
    height: 80%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box {
    width: 200px;
    height: 200px;
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .row {
    width: 500px;
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 50% 100%;
    background: whitesmoke;
    position: absolute;
    z-index: 1;
  }
  .column {
    width: 1px;
    height: 500px;
    transform: scaleX(0.5);
    transform-origin: 100% 50%;
    background: whitesmoke;
    position: absolute;
    z-index: 1;
  }
  .line {
    width: 100px;
    height: 100px;
    background: rgb(0, 0, 0);
    transform: skew(0deg, 0deg);
    /* transform: scaleY(0.5);
    transform-origin: 50% 100%; */
  }
</style>
