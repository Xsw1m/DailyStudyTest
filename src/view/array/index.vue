<template>
  <div class="main">
    <div class="div2">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// for (var i=1;i<=5;i++){
//   console.log('1', i)
// 	setTimeout(function timer() {
// 		console.log('2', i)
// 	},i*1000)
// }
// for (var i=1;i<=5;i++){
// 	(function(j){
// 		setTimeout(function timer() {
// 			console.log('3', j)
// 		},j*1000)
// 	})(i)
// }
// function func1() {
//   var a = 1
// }
// function func2() {
//   setTimeout(() => {
//     console.log('a():', a)
//   }, 1000);
// }
// func2()
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
    height: 100%;
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
    height: 100%;
    background: white;
    /* display: flex;
    justify-content: center;
    align-items: center; */
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
