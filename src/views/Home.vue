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
  <!-- <h2>首页</h2> -->

  <div class="top-lun">
    <ul>
      <li v-for="item in imgLun" :key="item.index" id="slider">
        <a href=""><img :src="item.imgUrl" alt=""><div class="lun-text">{{item.text}}</div></a>        
      </li>
    </ul>
  </div>

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
      isshowx:true,
      startPointX:0,
      changePointX:0,
      showIndex:0,
      imgLun:[
        {text:'01','imgUrl':require('@/assets/img/toplun/01-1.jpg')},
        {text:'02','imgUrl':require('@/assets/img/toplun/02-1.jpg')},
        {text:'03','imgUrl':require('@/assets/img/toplun/03-1.jpg')},
        {text:'04','imgUrl':require('@/assets/img/toplun/04-1.jpg')},
        {text:'05','imgUrl':require('@/assets/img/toplun/05-1.jpg')},
        {text:'06','imgUrl':require('@/assets/img/toplun/06-1.jpg')},
        {text:'07','imgUrl':require('@/assets/img/toplun/07-1.jpg')},
        {text:'08','imgUrl':require('@/assets/img/toplun/08-1.jpg')},
        {text:'09','imgUrl':require('@/assets/img/toplun/09-1.jpg')},
        {text:'10','imgUrl':require('@/assets/img/toplun/10-1.jpg')},
        {text:'11','imgUrl':require('@/assets/img/toplun/11-1.jpg')},
        {text:'12','imgUrl':require('@/assets/img/toplun/12-1.jpg')}
      ]
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

/* top-lun */
.top-lun {
    width: 98%;
    height: 80px;
    margin:10px auto;
}
.top-lun ul {
    width: 98%;
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content:first baseline;
    overflow-x:scroll;
    -webkit-overflow-scrolling : touch; 
}
.top-lun ul::-webkit-scrollbar {
    display: none;
}
.top-lun ul li {
    float: left;
    height: 50px;
    width: 50px;
    margin: 0px 5px;
}
.top-lun ul li a {
    text-decoration: none;
}
.top-lun ul li a img{
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin: 4px 0px;
}
.lun-text {
    text-align: center;
}
</style>