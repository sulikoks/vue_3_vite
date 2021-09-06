<template>
  <div ref="canvas" class="canvas" @dblclick="fullscreen = !fullscreen" />
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue"
import { createParticle } from "../canvas/particle"

const canvas = ref(null)
const fullscreen = ref(false)

watchEffect(() => {
  if (!canvas.value || !document.fullscreenEnabled) return
  if (fullscreen.value) {
    canvas.value.requestFullscreen && canvas.value.requestFullscreen()
  } else if (document.fullscreenElement) {
    document.exitFullscreen()
  }
})

onMounted(() => {
  console.log('-----onMounted')
  createParticle(canvas.value)
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
