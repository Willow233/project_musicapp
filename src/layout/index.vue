<template>
  <div class="app-wrapper">
    <div v-if="false" class="sidebar-container">
      <Sidebar />
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
    AppMainVue,
  },
}
</script>

<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  // width: 100%;
  padding: 0;
}

.drawer-bg {
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.sidebar-container {
  position: fixed;
  display: block;
  width: 15.625rem;
  background-color: aqua;
  height: 20rem;
}

.main-container {
  z-index: 8;
}

.fixed-bottom {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9;
  width: 100%;
}

</style>
