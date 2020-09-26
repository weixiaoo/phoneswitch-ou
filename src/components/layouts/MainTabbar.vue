<template>
  <div id="main-group">
      <div class="content">
          <router-view></router-view>
      </div>

      <div class="main-bottom">  
        <router-link to="/home" tag="li">
            <div class="iconfont">&#xe7a7;</div>
            <div class="style-size">首页</div>
        </router-link>
        <router-link to="/dynamic" tag="li">
            <div class="iconfont">&#xe7c9;</div>
            <div class="style-size">动态</div>            
        </router-link>
        <router-link to="/watching" tag="li">
            <div class="iconfont">&#xe748;</div>
            <div class="style-size">看点</div>
        </router-link>
        <router-link to="/mine" tag="li">
            <div class="iconfont">&#xe7b2;</div>
            <div class="style-size">我的</div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'MainTabbar'
}
</script>

<style scoped>
    #main-group{
       height: 100%;
       width: 100%;
    }
    .main-bottom{
		position:absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #eee;
	}
    .main-bottom li {
        list-style: none;
        padding: 0px 28px;
    }
    .main-bottom .iconfont {
        text-align: center;
        font-size: 20px;
    }
    .main-bottom .style-size {
        font-size: 12px;
    }  
    .router-link-active {
        color: red;
    }
</style>