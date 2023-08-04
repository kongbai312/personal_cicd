<template>
    <div>
      Home
      <el-button>Default</el-button>
      <el-button type="primary" size="large">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <pr_button>123</pr_button>
    </div>
    <div class="test"></div>
    <span class="text">测试</span>
  </template>
  
  <script setup lang='ts'>
     
  </script>
  
  <style lang="scss" scoped>
    .test{
      background-color: red;
      width: 90px;
      height: 90px;
    }
    .text{
      font-size: 16px;
    }
  </style>
  