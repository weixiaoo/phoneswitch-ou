<template>
<div id="view-mine">
  <top-nav>
    <div class="home-left iconfont" slot="top-left">&#xe744;</div>
    <div class="home-center" slot="top-center">我的</div>
    <div class="home-right iconfont" slot="top-right">&#xe76c;</div>
  </top-nav>

  <div class="mine-top">
    <div class="top-left">头像</div>
    <div class="top-right">文字</div>
  </div>
  <h2>我的</h2>
</div>
  
</template>

<script>
import TopNav from '../components/common/TopNav'

export default {
    name:'Mine',
    components: {
      TopNav
    }
}
</script>

<style>
  #view-mine {
    height: 100%;
    width: 100%;
    background-color: rgb(253, 253, 253);
  }
  .mine-top {
    height: 100px;
    width: 96%;
    margin: 5px auto;
    border-radius: 20px;
    background-color: rgb(235, 230, 230);
  }
  .top-left {
    float: left;
    height: 80px;
    width: 25%;
    background-color: #fff;
    margin: 10px 5px 10px 15px;
  }
  .top-right {
    float: left;
    height: 80px;
    width: 60%;
    background-color: pink;
    margin: 10px;
  }
</style>