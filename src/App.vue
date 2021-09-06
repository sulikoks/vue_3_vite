<template>
  <main>
    <CanvasParticle />
  </main>
</template>

<script setup>
import CanvasParticle from './components/CanvasParticle.vue'
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
  margin: 0;
}
main {
  height: 100%;
}
</style>
