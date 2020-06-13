<template>
  <div class="main">
    <div class="div1">
      <p @click="toindex('home')" style="cursor: pointer;">首页</p>
      <div>&nbsp;  ||  &nbsp;</div>      
      <p @click="toindex('index')" style="cursor: pointer;">目录</p>
      <!-- <div>&nbsp;  ||  &nbsp;</div>
      <p @click="totypescript" style="cursor: pointer;">typescript</p>
      <div>&nbsp;  ||  &nbsp;</div>
      <p @click="toArray" style="cursor: pointer;">数组的处理方法</p> -->
    </div>
    <div class="div2">
      <div class="sidebar">
        <div class="item">
          <ul v-for="(item, index) in siderarray" :key="index+1">
            <li @click="topath(item.path)" class="index_item">{{item.title}}</li>
          </ul>
        </div>
      </div>
      <div class="div3">
        <router-view></router-view>
      </div>
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
  var a = 1
// }
function func2() {
  setTimeout(() => {
    console.log('a():', a)
  }, 1000);
}
func2()
export default {
  data () {
    return {
      title: '首页',
      x: 0,
      y: 0,
      siderarray: [
        {id: 1, path: 'array', title: '数组的处理方法'},
        {id: 2, path: 'typescript', title: 'typescript'},
        {id: 3, path: 'event', title: '事件处理方法'},
        // {id: 4, path: 'typescript', title: 'typescript'}
      ]
    }
  },
  methods: {
    topath (path) {
      this.$router.push('/' + path)
    },
    toindex (path) {
      this.$router.push('/' + path)
    },
    toArray () {
      this.$router.push('/array')
    },
    totypescript () {
      this.$router.push('/typescript')
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
    flex-direction: row;
  }
  .div3 {
    width: calc(100% - 200px);
    /* flex: 1; */
    height: 100%;
  }
  .sidebar {
    width: 200px;
    height: 100%;
    background: wheat;
  }
  .item {
    width: 100%;
    height: 50px;
    margin-top: 10%;
  }
  .item ul {
    margin: 0;
  }
  ul,li{list-style-type: circle; cursor: pointer;}
  .index_item {
    margin: 15px 5px;
    text-align: center;
  }
</style>
