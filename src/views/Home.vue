<template>
<div id="view-home">
  <top-nav>
     <div class="home-left iconfont" slot="top-left">&#xe744;</div>
     <div class="home-center" slot="top-center">首页</div>
     <div class="home-right iconfont" slot="top-right">&#xe76c;</div>
  </top-nav>
  <div class="top-main">
    <div class="search-bar">
        <input id="wenzi" type="text" placeholder="xxx都能搜" v-model="wenziSearch">  
        <i class="iconfont i-left" @click="search">&#xe7b3;</i>
        <i class="iconfont i-right" @click="clear" v-show="isshowx">&#xe749;</i>
    </div>
  </div>
  <continu-play></continu-play>
  <h2>首页</h2>
</div>

</template>

<script>
import TopNav from '../components/common/TopNav'
import ContinuPlay from '../components/common/ContinuPlay'

export default {
  name:'Hone',
  components: {
    TopNav,
    ContinuPlay
  },
  data() {
    return {
      wenziSearch:'',
      isshowx:true
    }
  },
  methods: {
    clear() {
      if(this.wenziSearch.length > 0) {
        this.wenziSearch = '';               
      }            
    },
    search() {
      console.log('aaa');
    }
  }
}
</script>

<style>
#view-home {
  width: 100%;
  height: 100%;
}

/* 搜索部分 */
.top-main {
    position: relative;
    height: 30px;
    line-height: 30px;
    margin: 5px auto;
    width: 98%;
}
.search-bar {
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 6px;
    font-size: 14px;
    text-align: center;
}
.search-bar input {
    text-indent: 0px;
    height: 30px;
    line-height: 30px;
    width: 80%;
    border: none;
    outline: none;
    font-weight: normal;
}
.search-bar .i-left {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 20px;
    color: #B2B2B2;
}
.search-bar .i-right {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    color: #B2B2B2;
}
</style>