---
layout: Post
title:  关于spring-boot的一切都在这里
date:   2016-03-27 21:04:49
tags: 
  - Java
  - Spring Boot
---

关于spring-boot的一切都在这里，很早就想写这个题目，只是一直没写，今天是周六很热没有去公司，加上需要做团队分享，然后就在家整理整理spring-boot相关的技术分享，也顺便发一篇博客。

Spring Boot是由Pivotal团队提供的全新框架，其设计目的是用来简化新Spring应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。spring 使用过程中，基本上是少不了xml的配置，但在Spring Boot中 没有任何xml的配置，这并不是说Spring Boot不需要配置，而是他将配置集中化 通一个 propertes或者ymal文件完成。

开始Spring Boot 要深刻知道  Spring Boot 并不是全新的框架，他只是将Spring系列组件进行整合，简化开发。就像Rails这类框架一样，可以快速开始一个项目，好了，接下来让我们 以maven为基础使用Spring Boot开始一个java web项目。

1.快速开始(pom.xml配置)

```xml
<parent>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-parent</artifactId>
<version>1.1.8.RELEASE</version>
</parent>
<dependencies>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
</dependencies>
```

2.添加启动入口

```java
@SpringBootApplication
public class Application extends WebMvcConfigurerAdapter {

public static void main(String[] args) throws Exception {
  SpringApplication.run(Application.class, args);
}

}
```

3. 添加Controller

```java
@ResponseBody
@RestController
public class EmailController {
@Resource
private IUserService userService;

@RequestMapping(value = "/info", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
public boolean getUserInfo(String userId) {
 return true;
}
}
````

OK搞定了，用 mvn spring-boot:run 启动服务, Tomcat 之类的都不需要装，只要对 Spring 有过一定了解的上手 Spring Boot 绝对很快。

相关资料：

[Spring Boot Cookbook](https://github.com/duqicauc/Spring-Boot-Cookbook-zh)

[Spring Boot 官网文档](http://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/htmlsingle/)
