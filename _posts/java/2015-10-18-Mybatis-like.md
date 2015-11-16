---
layout: post
title:  "MyBatis模糊查询like的两种使用方法"
date:   2015-10-18 13:06:05
categories: Java
tags: java
excerpt: 初次使用MyBatis持久层框架，进行模糊查询如like时，如果传入的map类型的参数，可以使用${}，
---

* content
{:toc}

## MyBatis模糊查询like的两种使用方法 
---

初次使用MyBatis持久层框架，进行模糊查询如like时，如果传入的map类型的参数，可以使用${}，
如果传入的不是map类型的参数，
不知道如何处理。经过研究想到了两种方法（我使用的是MySQL数据库），
如where name like concat（concat('%'#{name}),'%')或者where name like 
“%"#{name}“%“注意：后一种方法"%"是双引号，而不是单引号

    where bo.name like concat(concat('%', ?), '%')
	
即完整的查找语句
	
	<select id="findByLikeName" parameterType="string" resultMap="bookMap">
	    select id, name, bo.publisher
        from t_book 
        where name like concat(concat('%', #{name}),'%')	
	</select>

	
>文章来源[http://runhang.github.io/2015/10/18/Mybatis-like/](http://runhang.github.io/2015/10/18/Mybatis-like/)