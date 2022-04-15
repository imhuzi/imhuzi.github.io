---
layout: post
title:  服务注册/发现
date:   2016-03-22 14:14:09
categories:  Architecture
---

整理下可以做服务发现的开源项目

### Consul

Consul 是一个支持多数据中心分布式高可用的服务发现和配置共享的服务软件,由 HashiCorp 公司用 Go 语言开发, 基于 Mozilla Public License 2.0 的协议进行开源. Consul 支持健康检查,并允许 HTTP 和 DNS 协议调用 API 存储键值对.一致性协议采用 Raft 算法,用来保证服务的高可用. 使用 GOSSIP 协议管理成员和广播消息, 并且支持 ACL 访问控制.
##### 参考连接：

https://www.consul.io

http://txt.fliglio.com/2014/05/encapsulated-services-with-consul-and-confd/

http://www.mammatustech.com/consul-service-discovery-and-health-for-microservices-architecture-tutorial

### Eureka

### zookeeper

### Doozerd

### Etcd

下面所以一篇关于 zookeeper Doozerd Etcd 的介绍
http://jasonwilder.com/blog/2014/02/04/service-discovery-in-the-cloud/
