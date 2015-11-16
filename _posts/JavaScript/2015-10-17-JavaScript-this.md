---
layout: post
title:  "JavaScript this"
date:   2015-10-17 23:06:05
categories: JavaScript
tags: javaScript
excerpt: JavaScript的数据结构学习笔记。
---

* content
{:toc}

## JavaScript this 
---

### JavaScript this

>函数中的this关键字获取值时根据执行对象不同，返回的值不同，
在全局作用域中调用时，获取的是全局变量的值。在对象中调用时，获取的是对象的值
在此再强调一遍一个非常重要的知识点：在函数中this到底取何值，
是在函数真正被调用执行的时候确定的，函数定义的时候确定不了。
因为this的取值是执行上下文环境的一部分，每次调用函数，都会产生一个新的执行上下文环境。

	var color = "red";
	var box = {color:"blue"};
	function showColor(){
		alert(this.color);
	}
	
	showColor(); //red
	box.show = showColor;
	box.show();  //blue

### 闭包与this

>this调用全局变量
	
	var name = "outer";
	
	var obj = {
	   name: "obj-name",
	   sayName:function(){
	        return function(){
		        return this.name;
		    }
		}
	};
	
	alert(obj.sayName()());//outer 这是this调用全局变量的name
	
>输出结果为：outer

>this调用对象的变量
	var name = "outer";
	var obj = {
	   name: "obj-name",
	   sayName:function(){
	        var t = this;  //在这里this指向t，则调用对象的name
	        return function(){
		        return t.name;
		    }
		}
	};
	
	alert(obj.sayName()());//obj-name
	
>输出结果为：obj-name

>文章来源[http://runhang.github.io/2015/10/17/JavaScript-this/](http://runhang.github.io/2015/10/17/JavaScript-this/)