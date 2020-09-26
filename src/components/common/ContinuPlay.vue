<template>
  <div id="continu-play">
      <div class="pictures">
          <transition-group tag="ul" name="pic">
              <li class="slide" v-for="(item,index) in imgArray" :key="`key-${index}`" 
              v-show="index === starts">
                <a href="#">
                    <img :src="item.imgUrl">
                </a>
            </li> 
          </transition-group>               
      </div>

      <div class="points">
          <span v-for="(item,index) in imgArray.length" :key="index" :class="{'active' : index === starts}" @click="change(index)"></span>
      </div>
  </div>
</template>

<script>
export default {
    name:'ContinuPlay',
    data() {
        return {
            starts:0,
            timer:'',
            imgArray:[
                {'imgUrl':require('@/assets/img/cp/pic0.jpg')},
                {'imgUrl':require('@/assets/img/cp/pic1.jpg')},
                {'imgUrl':require('@/assets/img/cp/pic2.jpg')},
                {'imgUrl':require('@/assets/img/cp/pic3.jpg')}
            ]
        }
    },
    methods: {
        autoPlay() {
            this.starts++
            if(this.starts > this.imgArray.length - 1) {
                this.starts = 0
            }
        },
        change(index) {
            this.starts = index
        },
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            },2800)
        })
    }
}
</script>

<style scoped>
    #continu-play {
        width: 100%;
        height: 250px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }
    .pictures,img {
        width: 100%;
        height: 250px;
    }
    li {
        position: absolute;
    }
    .points {
        position:absolute;
        width: 100%;
        bottom: 10px;
        margin: 0 auto;
        z-index: 10;
        text-align: center;
    }
    .points span {
        width: 10px;
        height: 10px;
        border: 1px solid #eee;
        border-radius: 5px;
        display: inline-block;
        margin-right: 10px;
    }
    .active {
        background: #fff !important;
    }

    .pic-enter-to {
        transform: translateX(0);
        transition: all 1.5s ease;
    }
    .pic-leave-active {
        transform: translateX(-100%);
        transition: all 1.5s ease;
    }
    .pic-enter {
        transform: translateX(100%);
    }
    .pic-leave {
        transform: translateX(0); 
    }
</style>