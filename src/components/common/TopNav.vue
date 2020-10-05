<template>
  <div id="top-nav">
      <div class="top-header">
          <div class="left" @click="goback"><slot name="top-left"></slot></div>
          <div class="center"><slot name="top-center">{{title}}</slot></div>
          <div class="right"><slot name="top-right"></slot></div>
      </div>
      
  </div>
</template>

<script>
export default {
    name:'TopNav',
    props: {
        title:String
    },
    methods: {
        goback() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
#top-nav {
    height: 100%;
    width: 100%;
}

.top-header {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    background-color: #eee;
}
.center {
    flex: 1;
    text-align: center;
    font-weight: 600;
}
.left {
    margin-left: 10px;
}
.right {
    margin-right: 10px;
}
</style>