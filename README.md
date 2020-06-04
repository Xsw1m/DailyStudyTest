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

## 1.什么是闭包
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
```bush
https://www.cnblogs.com/yangguoe/p/8474173.html
1、CommonJs 模块输出的是一个值的拷贝，ES6模块输出的是一个值的引用
2、CommonJS 模块是运行时加载，ES6模块是编译时输出接口
3、ES6输入的模块变量，只是一个符号链接，所以这个变量是只读的，对它进行重新赋值就会报错

1、这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的
2、对于依赖的模块，AMD 是提前执行，CMD 是延迟执行
3、CMD 推崇依赖就近，AMD 推崇依赖前置
```
