<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>

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
  /* width: 100%; */
  position: relative;
  overflow: hidden;
  z-index: -1;
}
</style>