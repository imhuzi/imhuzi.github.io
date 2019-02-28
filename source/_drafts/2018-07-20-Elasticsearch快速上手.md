---
title: 'Elasticsearch快速上手 '
date: 2018-07-20 12:14:39
categories: search
tags: 
  - elasticsearch
  - 搜索
  - 快速入门
---
elasticsearch快速上手步骤:
## 1. 下载安装
下载安装官方文档很详细，直接按照官方文档操作即可，安装之后执行如下命令看是否安装成功。
```shell
curl  -XGET '192.168.1.165:9200"
```

如果打印类似如下就说明按照成功
```json
{
  "name" : "centos-vm-elasticstack",
  "cluster_name" : "es-cluster",
  "cluster_uuid" : "Roa8oKHkT-CDzyJwGrqmnA",
  "version" : {
    "number" : "5.3.2",
    "build_hash" : "3068195",
    "build_date" : "2017-04-24T16:15:59.481Z",
    "build_snapshot" : false,
    "lucene_version" : "6.4.2"
  },
  "tagline" : "You Know, for Search"
}
```

## 创建mapping

elasticsearch 5.x版本以前 有几个概念跟传统数据库比较相似，索引(index) 好比数据, 类型(type) 好比表。6.x之后去掉了类型。这里创建elasticsearch的mapping 就好比创建数据库表，指定字段名称，类型等。关于mapping的详细说明可以看 [官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html) 对mapping的详细定义

关于mapping相关的操作如下:  在mapping json文件所在目录执行如下命令:

   ```shell
    # 查询mapper
    curl  -XGET '192.168.1.165:9200/topic_index/_mapping?pretty'

    #  创建mapper, @后面跟mapper文件 
    curl -s -XPUT '192.168.1.165:9200/topic_index?pretty' --data-binary @mapper.json

    # 删除mapper
    curl -XDELETE '192.168.1.165:9200/topic_index?pretty
   ```
上面这些操作也可以通过 postman或者同类型的工具来进行操作
