---
layout: Post
title: GitLab-CI之Maven
date: 2018-03-10 15:15:19
tags: 
  - CI/CD
  - 自动构建
  - Maven
---

Maven 项目通过GitLab-Ci做自动构建和自动发布的配置如下:

```yaml
# This file is a template, and might need editing before it works on your project.
---
# Build JAVA applications using Apache Maven (http://maven.apache.org)
# For docker image tags see https://hub.docker.com/_/maven/
#
# For general lifecycle information see https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html
#
# This template will build and test your projects as well as create the documentation.
#
# * Caches downloaded dependencies and plugins between invocation.
# * Does only verify merge requests but deploy built artifacts of the
#   master branch.
# * Shows how to use multiple jobs in test stage for verifying functionality
#   with multiple JDKs.
# * Uses site:stage to collect the documentation for multi-module projects.
# * Publishes the documentation for `master` branch.

variables:
  # This will supress any download for dependencies and plugins or upload messages which would clutter the console log.
  # `showDateTime` will show the passed time in milliseconds. You need to specify `--batch-mode` to make this work.
  MAVEN_OPTS: "-Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN -Dorg.slf4j.simpleLogger.showDateTime=true -Djava.awt.headless=true"
  # As of Maven 3.3.0 instead of this you may define these options in `.mvn/maven.config` so the same config is used
  # when running from the command line.
  # `installAtEnd` and `deployAtEnd`are only effective with recent version of the corresponding plugins.
  MAVEN_CLI_OPTS: "--batch-mode --errors --fail-at-end --show-version -B"
  JAVA_HOME: "/usr/local/java8"

# Cache downloaded dependencies and plugins between builds.
#cache:
# paths:
#  - /home/gitlab-runner/.m2/repository/

stages:
  - build
  - deployJar
  - deploy

# 快照版构建和部署测试
snapshoot-build:
  stage: build
  only:
    - develop
    - release/*
  tags:
    - "development environment 252"
  script:
    'mvn $MAVEN_CLI_OPTS clean install -Dmaven.test.skip=true -Dspring.profiles.active=dev'
  artifacts:
    paths:
      - xmx-base/target/*.jar

snapshoot-deploy-jar:
  stage: deployJar
  only:
    - develop
    - release/*
  tags:
    - "development environment 252"
  script:
    - 'mvn  deploy -Dmaven.test.skip=true -Dspring.profiles.active=dev'

snapshoot-deploy:
  stage: deploy
  only:
    - develop
    - release/*
  tags:
    - "development environment 252"
  script:
     - 'sh /home/app-deploy-test.sh'

```

以上配置（经过测试），可以根据自己的情况修改。遇到问题也可以通过 评论问我