---
title: 什么是NPM
date: 2019-01-22 09:27:15
tags: [node,前端]
category: [前端,node]
comments: true
---

## 什么是NPM

NPM（node package manager），通常称作node包管理器，主要功能就是管理node包，包括：安装、卸载、更新、查看、搜索、发布等。

NPM是基于couchdb一个数据库，详细记录了每个包的信息（作者、版本、依赖、授权信息等）。

[NPM官网](https://www.npmjs.com/)

<!-- more -->

###  NPM安装

**本地安装：**

package会被下载到当前所在目录，./node_modules下（运行npm时所在的目录），只能当前目录下使用，安装包放在，可以通过require()来引入

**全局安装：**

package会被下载到待定的系统目录下（安装包放在 /usr/local 下），安装的package能在所有目录下使用，可以直接在命令行里使用

#### npm i package(本地安装)

```js
npm install webpack-cli
```

安装结束后，当前目录下回多出一个 `node_modules` 目录，`webpack-cli`就安装在里面。同时注意控制台输出的信息：

```js
+ webpack-cli@3.1.2  // 当前安装的package为webpack-cli，版本是3.1.2
```

#### npm i -g package(全局安装)

```js
npm install -g webpack-cli
```

### npm包管理

#### 安装最新版本

```js
npm i package-name
```

#### 安装1.1.0版本的包

```js
npm i package-name@"1.1.0"
```

可以通过package.json进行安装，将项目依赖的包都在package.json这个文件里声明，通过以下命令搞定

```js
npm i
```

#### 卸载

```js
npm uninstall package-name
```

#### 卸载某个版本

```js
npm uninstall package-name@"1.1.0"
```

#### 查看安装的包

```js
npm ls
```

#### 查看特定包的信息

```js
npm ls package-name
```

#### 查看更详细的信息

```js
npm info package-name
```

#### 查看命令帮助

```js
npm help
```







