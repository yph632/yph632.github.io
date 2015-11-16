---
layout: post
title:  JavaScript 的闭包(closure)和变量作用域
date:   2015-10-17 22:06:05
categories: JavaScript
tags: javaScript
excerpt: 闭包：有权访问另一函数作用域中的变量的函数(而这个函数一般是定义在一个函数内部的函数)
---

* content
{:toc}

## 闭包(closure)的定义

### 闭包：有权访问另一函数作用域中的变量的函数(而这个函数一般是定义在一个函数内部的函数)

	function add(num1, num2){
		return function odAdd(){
			return num1 + num2;
		};
	}
	var r = add(1, 2);
	var result1 = r();
	console.log("result1 ： " + result1);
	//或者调用方式如下
	var result2 = add(1, 2)();
	console.log("result2 ： " + result2);

>输出结果为 
result1 : 3
result2 : 3

## 闭包的引用
闭包中对局部变量是按照引用传递的

	function test(){
		var num = 100;
		var fn = function(){
			console.log(num);
		};
		num++;
		return fn;
	}

	test()();
	
>输出结果为: 101
外部函数中所有的局部变量都在闭包内，即使这个局部
变量在闭包后声明
	
	function test(){
		var fn = function(){
			console.log(name);
		};
		var name = "jack";
		return fn;
	}

	test()();

>输出结果为: jack


## 变量的作用域

### 变量前的var

>  &nbsp; &nbsp;var 不一定是用来定义局部变量的
JavaScript的全局变量和局部变量的分界是这样的：
过程体(包括方法function,对象Object o ={})外的所有变量
不管你有没有加var保留字,都是全局变量
而在过程体内(包括方法function(){},对象Object obj={})
内的对象加var保留字则为局部变量,而不加var保留字即为全局变量

第一种方式（错误）
	
	var name = "tom"
	functioin test(){
		alert(name);
		var age = 18;
    }	
	test();
	alert(age);//error

//第二种方式(正确：age前面没有加var)

	var name = "tom";
	function test(){
		alert(name);
		age = 18;  //注意：前面没有加var
	}
	
	test();
	alert(age);//Ok
	
	
第三种方式(错误:没有块级作用域)

	function test(){
		if(true){
		   var address = "China";
		}
		alert(address);
	}
	
	test();
	
	alert(address);//Error
	
### 模仿块级作用域
&nbsp;&nbsp;如果address前加var 则第二个alert()调用失败，否则，可以正常调用

	function test(){
	  if(true){
	    (function(){
	      var address = "jerry";
	      alert(address);
	    })();
	  }
	  alert(address); 
	}
	
	test();
	
## 总结

### 使用闭包的好处

1. 希望一个变量长期驻扎在内存中
2. 避免全局变量的污染
3. 私有成员的存在
