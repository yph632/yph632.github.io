---
layout: post
title:  "JavaScript 数据结构"
date:   2015-10-17 16:06:05
categories: JavaScript
tags: javaScript
excerpt: JavaScript的数据结构学习笔记。
---

* content
{:toc}

## JavaScript 数据结构 
---

### 基本数据类型

* undefined
* null
* boolean
* number
* string

### 复杂数据类型

* Object

---

---

### typeof操作符
typeof用于检测变量的数据类型，返回值如下：
---

* “undefined”—— 值未定义
* “boolean”—— 值为布尔型
* “string” —— 值为字符串
* “number”—— 值为数字型
* “object”—— 值为对象或null
* “function”—— 值为函数

---
	var message = "Tom";
	alert(typeof message);

### undefined类型

---

*  undefined类型只有一个值就是undefined
* 当var声明了一个变量，但是未给变量赋初始值时，变量的值就是undefined
	<code class="hljs coffeescript">
	var message;
	alert(message); //undefined
	alert(message == undefined); //true
	</code>
* 未初始化的变量执行typeof会返回undefined。为声明的变量进行typeof操作也会返回undefined值var message;
	<code class="hljs coffeescript">
	alert(typeof message); //undefined
	alert(typeof age); //age未声明
	</code>
* 声明变量时，推荐给变量赋初始值。

### boolean类型
---
* boolean类型只有两个值，true和false
* 调用Boolean()方法可以将所有类型转换为boolean类型
<code class="hljs coffeescript">
	var name = "tom";
	var result = Boolean(name);
	alert(result);
	var name = "tom";
	if(name) {
		alert("value is true");
	}
</code>
---

	|数据类型         |        转换为true的值     |   转换为false的值  |
	|Boolean         |        true                |   false           |
	|string          |       任何非空字符串        |     “”空字符串  |
	|number          |       任何非零数字值        |     0和NaN        |
	|object         |        任何对象              |      null         |
	|undefined       |                             |   undefined        |

### number类型

* number类型用来表示整数和浮点数
* 整数可以表示十进制、八进制和十六进制
<code class="hljs coffeescript">
var num = 100;
var num1 = 070; //八进制
var num2 = 0xA; //十六进制
</code>
* 浮点数
<code class="hljs coffeescript">
var num = 1.1;
var num1 = 3.125e10; //科学计数法
var num2 = 2.0; //整数，被解析为2
</code>

### NaN
* NaN，即非数值(Not a Number)是Number类型中一个特殊的值，该数值表示一个本来要返回数值的操作数未返回数值的情况
* 任何涉及NaN操作的结果总是NaN，例如NaN/10
* NaN不和任何值相等，包括NaN自己
* isNaN()函数用于判断参数是否可以转换为数值型，如果不能转换则返回true
<code class="hljs coffeescript">
alert(isNaN(NaN)); //true
alert(isNaN(10)); //false
alert(isNaN("100")); //false
alert(isNaN("tom")); //true
alert(isNaN(true)); //false 结果为1
</code>