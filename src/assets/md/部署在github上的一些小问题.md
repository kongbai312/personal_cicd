# 部署在github上的一些小问题

前言：部署在github上总会出现大大小小的问题，以下是我多年部署遇到的不常见的问题，希望对大家有所帮助。

## 一：.nojekyll文件

作用：告诉 Github Pages 当前⽹站不是基于 Jekyll 构建的，不要忽略掉下划线开头的⽂件和⽂件夹。

一般你需要创建一个空的名为.nojekyll防止报错

## 二：使用github action时候报错

报错提示：

```javascript
错误：The deploy step encountered an error: The process '/usr/bin/git' failed with exit code
```

解决：https://blog.csdn.net/ibigboy/article/details/126402267



## 三：github action自动化部署代码

选择环境node.js

```
name: CI Github Pages
on:
  #监听push操作
  push:
    branches:
      - master # 这里只配置了main分支，所以只有推送main分支才会触发以下任务
jobs:
  # 任务ID
  build-and-deploy:
    # 运行环境
    runs-on: ubuntu-latest
    # 步骤
    steps:
      # 官方action，将代码拉取到虚拟机
      - name: Checkout  ️ 
        uses: actions/checkout@v3

      - name: Install and Build   # 安装依赖、打包，如果提前已打包好无需这一步
        run: |
          npm install
          npm run build-only

      - name: Deploy   # 部署
        uses: JamesIves/github-pages-deploy-action@v4.3.3
        with:
          branch: release # 部署后提交到那个分支
          folder: dist # 这里填打包好的目录名称

```

