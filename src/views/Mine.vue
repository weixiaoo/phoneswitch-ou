<template>
  <div id="view-mine">
    <top-nav>
      <div class="home-left iconfont" slot="top-left">&#xe744;</div>
      <div class="home-center" slot="top-center">动态</div>
      <div class="home-right iconfont" slot="top-right">&#xe76c;</div>
    </top-nav>
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
  }
</style>