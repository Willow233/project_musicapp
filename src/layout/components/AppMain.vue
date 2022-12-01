<template>
    <section class="app-main">
        <router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>

      <!-- <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
        
      </transition> -->
    </section>
  </template>
  
  <script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.path
      }
    }
  }
  </script>
  
  <style scoped>
  .app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 50px);
    min-width: 1300px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #F5F5F7;
  }
  .fixed-header + .app-main {
    padding-top: 50px;
  }
  </style>
  
  <style lang="less">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
  </style>