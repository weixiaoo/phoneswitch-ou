<template>
  <div id="app">
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from './components/layouts/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import './assets/css/base.css';

#app {
  height: 100%;
  width: 100%;
}
</style>
