<template>
    <div class="app-wrapper">
        <!-- v-if="true" @click="handleClickOutside" -->
        <div class="drawer-bg" >
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-menu"></use>
</svg>
        </div>
        <div class="sidebar-container">
          <Sidebar/>
        </div>
        
        <div class="main-container">
            <AppMainVue />
            <div class="fixed-bottom">
                <Musicbar />
                <NavbarVue />
            </div>
        </div>
    </div>
</template>

<script>
import Musicbar from './components/Musicbar.vue'
import NavbarVue from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMainVue from './components/AppMain.vue'
export default {
  name: 'Layout',
  components: {
    Musicbar,
    NavbarVue,
    Sidebar,
    AppMainVue
  }
}
</script>

<style lang="less" scoped>
    .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    }
  
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .sidebar-container{
    position: fixed;
    display: block;
    width: 15.625rem;
    background-color: aqua;
    height:20rem;
  }
  .fixed-bottom {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9;
    width: 100%;
  }

  .icon {
       width: 1.5625rem;
      height: 1.5625rem;
      color: black;
    }
</style>