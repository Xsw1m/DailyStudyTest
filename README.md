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

``` bash
132
```
