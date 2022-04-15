---
layout: Post
title: Spring boot Project deploy
date: 2018-03-14 12:36:37
tags:
  - Java
  - Spring Boot
  - deploy
---


通过在Vm参数中加: `-Dspring.profiles.active=dev` 来指定当前环境的配置文件

```bash

mvn clen install -Dspring.profiles.active=dev

```

# deploy 

#### 1. maven 插件配置

```xml

<build>
      <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <fork>true</fork>
                    <!-- 启动类-->
                    <mainClass>com.xmx.XmxBaseApplication</mainClass>
                    <executable>true</executable>

                </configuration>
                <executions>
                    <execution>
                        <goals>
                            <goal>repackage</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
      </plugins>
</build>
```



#### 2. linux 系统配置自启动

[查看更多spring boot 项目部署方式](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#deployment)

``以下过程适用于 centos系统``

```bash

# Copy the contents
[Unit]
Description=Xmx Base Service
After=syslog.target

[Service]
Environment='JAVA_OPTS=-Dspring.profiles.active=dev' # 环境变量
# 可执行jar的路径
ExecStart=/usr/local/im/xmx.com/packs/xmx.base.jar  ${JAVA_OPTS}    
SuccessExitStatus=143
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
# Copy here end ==========

vim /etc/systemd/system/xmx.base.service

systemctl enable xmx.base.service

# laster start app

systemctl start xmx.base
 
```

#### 关于 systemctl

经过上述过程后，可以通过以下命令进行操作

```bash
# start
systemctl start app

# stop
systemctl stop app

# restart
systemctl restart app

# status
systemctl status app


```

请参考:

[Systemd 入门教程：实战篇](http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-part-two.html)
