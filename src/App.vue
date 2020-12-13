<template>
  <div id="app">
      <Header></Header>
      <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
 import Header from "./layouts/Header.vue";

export default {
  name: 'App',
  components: {
   // HelloWorld
   Header,
  }
}
</script>

<style lang="scss">
// @import './assets/scss/app.scss'

</style>
