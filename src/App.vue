<template>
  <!-- 一级路由 -->
  <router-view/>
  <Musicbar/>
</template>

<script>
import Musicbar from './components/Musicbar.vue'

export default{
  components:{
    Musicbar
  }
}
</script>

<style lang="less">

</style>
