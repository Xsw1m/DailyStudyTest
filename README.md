# vuestudy

> project test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
### 目录
* [1.什么是闭包](#1什么是闭包)
* [9. export和exportDefault不同](#9-export和exportDefault不同)
* [10. 构造函数与原型对象](#10-构造函数与原型对象)

## 1.什么是闭包
```
有权访问另一个函数作用域中变量的 函数。同过return 函数的方法 -> 延伸了变量的作用范围
  1. 无论全局还是局部作用域，都可以访问局部变量，使其保留
```
``` bash
闭包是'函数的‘局部变量’集合。只是这个局部变量是可以在函数返回后被访问。'
#例子5：每次函数调用的时候创建一个新的闭包
# function newClosure(someNum, someRef) {
    // Local variables that end up within closure
    var num = someNum;
    var anArray = [1,2,3];
    var ref = someRef;
    return function(x) {
        num += x;
        anArray.push(num);
        alert('num: ' + num +
        '\nanArray ' + anArray.toString() +
        '\nref.someVar ' + ref.someVar);
    }
}
closure1=newClosure(40,{someVar:'closure 1'});
closure2=newClosure(1000,{someVar:'closure 2'});

closure1(5); // num:45 anArray[1,2,3,45] ref:'someVar closure1'
closure2(-10);// num:990 anArray[1,2,3,990] ref:'someVar closure2'
#2.闭包的弊端缺陷
闭包是一个非常强大的特性，但是人们对其也有诸多误解。一种耸人听闻的说法是闭包会造成内存泄漏，所以要尽量减少闭包的作用。
局部变量本来应该在函数退出的时候被解除引用，但如果局部变量被封闭在闭包形成的环境中，那么这个局部变量就能一直生存下去。从这个意义上看，闭包的确会使一些
数据无法被及时销毁，使用闭包的一部分原因室我们选择主动把一些变量封闭在闭包中，因为可能在以后还需要使用这些变量，把这些变量放在闭包中和放在全局作用域，
对内存方面的影响是一致的，这里并不能说成是内存泄漏。如果在将来需要回收这些变量，我们可以手动把这些变量设为null。
跟闭包和内存泄漏有关的地方是：使用闭包的同时比较容易形成循环引用，如果闭包的作用域链中保存着一些DOM节点，这时候就有可能造成内存泄漏。但是这本身并非闭
包的问题，也并非javascript的问题。在IE浏览器中由于BOM与DOM中的对象是使用C++以COM对象的方式实现的，而COM对象的垃圾回收机制是采用引用计数策略。在基于
引用计数策略的垃圾回收机制中，如果两个对象之间形成了循环引用，那么这两个对象都无法被回收，但循环引用造成的内存泄漏在本质上也不是闭包造成的。
同样，如果要解决循环引用带来的内存泄漏问题(既不会被垃圾回收，又不被使用)，我们只需要在循环引用中的变量设为null即可。将变量设置为null意味着切断变量与它此前引用的值之间的连接。当垃
圾收集器下次运行时，就会删除这些值并回收它们占用的内存。
```
## 2.angular 双向数据绑定与vue数据的双向数据绑定
``` bash
1、二者都是 MVVM 模式开发的典型代表
2、angular 是通过脏检测实现，angular 会将 UI 事件，请求事件，settimeout 这类延迟，的对象放入到事件监测的脏队列，当数据变化的时候，触发 $diget 方法进行数据的更新，视图的渲染

3、vue 通过数据属性的数据劫持和发布订阅的模式实现，大致可以理解成由3个模块组成，observer 完成对数据的劫持，compile 完成对模板片段的渲染，watcher 作为桥梁连接二者，订阅数据变化及更新视图
```
## 3.get与post 通讯的区别
``` bush
1、Get 请求能缓存，Post 不能
2、Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会，但是在抓包的情况下都是一样的。

3、Post 可以通过 request body来传输比 Get 更多的数据，Get 没有这个技术

4、URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的

5、Post 支持更多的编码类型且不对数据类型限制
```
## 4.模块加载AMD，CMD，CommonJS Modules/2.0 规\ES6模块与CommonJS模块的差异
[AMD CMD 模块加载](https://www.cnblogs.com/yangguoe/p/8474173.html)
```bush
1、CommonJs 模块输出的是一个值的拷贝，ES6模块输出的是一个值的引用
2、CommonJS 模块是运行时加载，ES6模块是编译时输出接口
3、ES6输入的模块变量，只是一个符号链接，所以这个变量是只读的，对它进行重新赋值就会报错

1、这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的
2、对于依赖的模块，AMD 是提前执行，CMD 是延迟执行
3、CMD 推崇依赖就近，AMD 推崇依赖前置
```
## 5.Webpack概念
``` bush
1.webpack 是一个现代 JavaScript 应用程序的静态模块打包器（module bundler）。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图（dependency graph）,其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle
2.
一、入口（entry）：入口起点（entry point）指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后， webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。* 每个依赖项随即被处理，最后输出到称之为 bundles 的文件中。*
二、 输出（output）:告诉 webpack 在哪里输出它所创建的 bundles ，以及如何命名这些文件。
三、loader：让 webpack 能够处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后就可以利用 webpack 的打包能力，对它们进行处理。
四、 插件（plugins）：插件的目的在于解决 loader 无法实现的其他事。
```
## 6.event.target 和 event.currentTarget
``` bush
target->  对事件的溯源
https://www.cnblogs.com/yzhihao/p/9398917.html
   ||
上面事件的绑定都是在冒泡阶段的，当我们点击最里层的元素d的时候，会依次输出:

target:d&currentTarget:d
target:d&currentTarget:c
target:d&currentTarget:b
target:d&currentTarget:a
从输出中我们可以看到，event.target指向引起触发事件的元素，而event.currentTarget则是事件绑定的元素，只有被点击的那个目标元素的event.target才会等于event.currentTarget。

如果我们把事件都绑定在捕获阶段，然后还是点击最里层的元素d，这时event.target还依旧会指向d，因为那是引起事件触发的元素，因为event.currentTaget指向事件绑定的元素，所以在捕获阶段，最先来到的元素是a,然后是b,接着是c,最后是d。所以输出的内容如下：
target:d&currentTarget:a
target:d&currentTarget:b
target:d&currentTarget:c
target:d&currentTarget:d

obj.addEventListener(event,function(){},bool)
bool:false，代表冒泡阶段执行
bool:true，代表捕获阶段执行
```
## 7. 绘画三角型
``` bush
.a{
    width: 0;
    height: 0;
    border-width: 100px;
    border-style: solid;
    border-color: transparent #0099CC transparent transparent;
    transform: rotate(90deg); /*顺时针旋转90°*/
 }
```
## 8.什么是Async/Await?
[异步请求-promise](https://segmentfault.com/a/1190000016788484)
``` bush

1. Promise虽然跳出了异步嵌套的怪圈，用链式表达更加清晰，但是我们也发现如果有大量的异步请求的时候，流程复杂的情况下，会发现充满了屏幕的then，看起来非常吃力，而ES7的Async/Await的出现就是为了解决这种复杂的情况。

2. 什么是Async/Await?
async/await是写异步代码的新方式，以前的方法有回调函数和Promise。
async/await是基于Promise实现的，它不能用于普通的回调函数。
async/await与Promise一样，是非阻塞的。
async/await使得异步代码看起来像同步代码，这正是它的魔力所在。

3. 
什么是回调地狱(函数作为参数层层嵌套)
什么是回调函数(一个函数作为参数需要依赖另一个函数执行调用)
```
#### 9. export和exportDefault不同
```
// 第一组
export default function crc32() { // 输出
  // ...
}

import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
  // ...
};

import {crc32} from 'crc32'; // 输入
export default命令用于指定模块的默认输出。
显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。
所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
```
## 10. 构造函数与原型对象
#### 1.5 对象原型_ proto_
```
对象都会有一个属性_ proto_ 指向构造函数的 prototype原型对象,之所以我们对象可以使用构造函数
prototype原型对象的属性和方法,就是因为对象有_ proto_ 原型的存在。
●_ proto_ 对象原型和原型对象prototype是等价的
●proto_ 对象原型的意义就在于为对象的查找机制提供一 个方向,或者说一 条路线,但是它是一 个非标准属性,
因此实际开发中,不可以使用这个属性，它只是内部指向原型对象prototype
```
