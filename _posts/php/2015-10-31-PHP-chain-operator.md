---
layout: post
title:  "ThinkPHP连贯操作"
date:   2015-10-31 22:10:05
categories: PHP
tags: php
excerpt: ThinkPHP模型基础类提供的连贯操作方法（也有些框架称之为链式操作），可以有效的提高数据存取的代码清晰度和开发效率，并且支持所有的CURD操作。。
---

* content
{:toc}

## ThinkPhp连贯操作 
---

ThinkPHP模型基础类提供的连贯操作方法（也有些框架称之为链式操作），
可以有效的提高数据存取的代码清晰度和开发效率，并且支持所有的CURD操作。

连贯操作又称为链式操作，类似QueryBuilder，实例化的模型类每调用一次连贯方法，
便会<b>修改本身的属性值，</d>最后以一个<b>终结方法来结束连贯操作，</b>
对于模型来说就是进行数据库操作然后返回结果。



 |连贯操作	| 作用	                                 |支持的参数类型
 |where*	    | 用于查询或者更新条件的定义	             |字符串、数组和对象
 |table	    | 用于定义要操作的数据表名称	             |字符串和数组
 |alias	    | 用于给当前数据表定义别名	             |字符串
 |data	    | 用于新增或者更新数据之前的数据对象赋值	 |数组和对象
 |field	    | 用于定义要查询的字段（支持字段排除）	 |符串和数组
 |order	    | 用于对结果排序	                         |字符串和数组
 |limit	    | 用于限制查询结果数量	                 |字符串和数字
 |page	    | 用于查询分页（内部会转换成limit）	     |字符串和数字
 |group	    | 用于对查询的group支持	                 |字符串
 |having	    | 用于对查询的having支持	                 |字符串
 |join*	    | 用于对查询的join支持	                 |字符串和数组
 |union*	    | 用于对查询的union支持	                 |字符串、数组和对象
 |distinct	| 用于查询的distinct支持	                 |布尔值
 |lock	    | 用于数据库的锁机制	                     |布尔值
 |cache	    | 用于查询缓存	                         |支持多个参数
 |relation	| 用于关联查询（需要关联模型支持）         |字符串
 |result	    | 用于返回数据转换	                     |字符串
 |validate	| 用于数据自动验证	                     |数组
 |auto	    | 用于数据自动完成	                     |数组
 |filter	    | 用于数据过滤	                         |字符串
 |scope*	    | 用于命名范围	                         |字符串、数组
 |bind*	    | 用于数据绑定操作	                     |数组或多个参数
 |token	    | 用于令牌验证	                         |布尔值
 |comment	| 用于SQL注释	                             |字符串
 |index	    | 用于数据集的强制索引（3.2.3新增）	     |字符串
 |strict	    | 用于数据入库的严格检测（3.2.3新增）	     |布尔值
 
> 终结方法：find、select、getFiled、add、addAll、save、delete

> 第一种方法

	public function index(){
		//实例化一个模型
		$userModel = D("account");
		$userModel
			->where('id=121')
			->select();
		echo($userModel->getLastSql());
	}

> 输出结果： SELECT * FROM `t_account` WHERE ( id=121 )

> 第二种方法
    
	public function index(){
		$userModel = D('account');
    	$condition = array(
    		'username'=>'linda';
    		'useremail'=>'123@123.com';
    	);
    	$userModel
    		->where($condition)
    		->select();
    	echo($userModel->getLastSql());
	}
	
> 输出结果： SELECT * FROM `t_account` WHERE `username` = 'linda' AND `useremail` = '123@123.com'