---
layout: Post
title:  Postgresql generate_series 函数应用
date:   2016-03-28 22:14:23
categories:  Postgresql
tags: 
  - 数据库
  - Postgresql
---

PostgreSQL 中有一个很有用处的内置函数generate_series，可以按不同的规则产生一系列的填充数据，具体语法见：[官方文档](https://www.postgresql.org/docs/9.1/static/functions-srf.html)

最近遇到一个简单的统计需求，按天，周，月，年的纬度统一新注册用户数，在count的时候需要分组，但是遇到0时，就没有相关数据，但是在图标上显示时又需要，所以用到了该函数，在此记录下一下，直接上sql:

```sql
-- 指定时间段内按 天，周，月，年进行统计数据: month是可变参数:day,week,month,year
select d.date, count(a.id)
FROM(
   select to_char(date_trunc('month', offs), 'YYYY-MM-DD') AS date
   FROM generate_series(to_date('20160403','yyyymmdd'), to_date('20160712','yyyymmdd'), '1 month')
    AS offs
   order by offs
) d
LEFT OUTER JOIN account a
ON (d.date=to_char(date_trunc('month', a.created_time), 'YYYY-MM-DD'))
GROUP BY d.date;

```
