import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/home'},
    {path :"/home",component:()=>import("../views/Home")},
    { path :"/dynamic",component:()=>import("../views/Dynamic")},
    { path :"/watching",component:()=>import("../views/Watching")},
    { path :"/mine",component:()=>import("../views/Mine")}
  ]
})
