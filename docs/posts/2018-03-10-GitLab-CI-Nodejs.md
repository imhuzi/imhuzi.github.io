---
layout: Post
title: GitLab-CI 之 Nodejs
date: 2018-03-10 13:44:33
tags: 
  - CI/CD
  - 自动构建
  - NodeJs
---

NodeJs 项目通过GitLab-Ci做自动构建和自动发布的配置如下:

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
#  NODE_PATH: "/usr/local/node"
#  PATH: "$PATH:$NODE_PATH/bin"

# Cache downloaded dependencies and plugins between builds.
#cache:
# paths:
#  - /home/gitlab-runner/.m2/repository/
# build stages
stages:
   - eslint
   - build
   - deploy

before_script:
#  - 'npm install --progress=false'
#   - 'npm install -g cnpm --registry=https://registry.npm.taobao.org'
   - 'cnpm install'
   -  echo "Start Build"

eslint-check:
  stage: eslint
  script:
    - 'npm run lint'
  only:
    - develop
  tags:
    - "development environment 252"

build-site:
  stage: build
  only:  # 指定那个分支
     - develop
  tags: # 指定 GitLab-CI runner 通过标签匹配
     - "development environment 252"
  script:
    - 'npm run build:test'
  artifacts:
    expire_in: 1 week
    paths:
      - dist
deploy:
  stage: deploy
  only:  # 指定那个分支
     - develop
  tags:
     - "development environment 252"
  script:
     - 'sh /home/vote-deploy-test.sh'

```

以上配置（经过测试），可以根据自己的情况修改。遇到问题也可以通过 评论问我
