<template>
  <div class="content">
    <div id="div1">1
      <div id="div2">2
        <div id="div3">3</div>
      </div>
    </div>
    <div id="div4">
      <ul id="list">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </div>
  </div>
</template>
<script>
window.onload = function(){
  console.log('开始')
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');
  var div3 = document.getElementById('div3');
  document.getElementById('list').addEventListener("click", function (event) {
    console.log('事件委托：', event.target, event.target.nodeName)
    if (event.target.nodeName.toLocaleLowerCase() === 'li') {
      console.log('内容是', event.target.innerHTML)
    }
  })
  div1.addEventListener("click", function (event) {
    console.log('div1:', this.id, event.target.id)
  }, false)
  // div2.addEventListener("click", function (event) {
  //   console.log('div1:', this.id, event)
  //   event.stopPropagation()
  // }, true)
  // div3.addEventListener("click", function (event) {
  //   console.log('div3:', event.target, event.target.id, event.target.nodeName.toLocaleLowerCase())
  // }, true)
  // div1.onclick = function (e) {
  //   console.log('div1:', this.id)
  //   e.stopPropagation()
  // }
  // div2.onclick = function () {
  //   console.log('div1:', this.id)
  // }
  // div3.onclick = function (e) {
  //   console.log('div1:', this.id)
  //   // e.stopPropagation()
  // }
}
export default {
}
</script>
<style scoped>
#div1 {
  float: left;
  width: 300px;
  height: 300px;
  background: red;
  text-align: center;
}
#div2 {
  float: left;
  width: 200px;
  height: 200px;
  background: green;
}
#div3 {
  float: left;
  width: 100px;
  height: 100px;
  background: blue;
}
#div4 {
  float: left;
  width: 300px;
  height: 300px;
}
#list {
  display: block;
}
</style>