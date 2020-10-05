<template>
<div id="view-watching">
  <top-nav>
    <div class="home-left iconfont" slot="top-left">&#xe744;</div>
    <div class="home-center" slot="top-center">看点</div>
    <div class="home-right iconfont" slot="top-right">&#xe76c;</div>
  </top-nav>
  
  <div class="watching-main">
    <router-link to="/watching/topnews" tag="li" replace>头条</router-link>
    <router-link to="/watching/tiyu" tag="li" replace>体育</router-link>
    <router-link to="/watching/shishang" tag="li" replace>时尚</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</div>
  
</template>

<script>
import TopNav from '../components/common/TopNav'

export default {
  name:'Watching',
  components: {
    TopNav
  },
  methods: {
    
  }
}
</script>

<style scoped>
  #view-watching {
    height: 100%;
    width: 100%;
  }
  .watching-main {
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .watching-main li {
    padding: 0 28px;
  }
  .router-link-active {
    color: rgb(250, 35, 53);
    border-bottom: 1px solid rgb(250, 35, 53);
  }
</style>