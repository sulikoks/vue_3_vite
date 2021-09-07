<template>
  <div ref="canvas" class="canvas" :class="{ fullscreen }" @dblclick="fullscreen = !fullscreen" />
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue"
import ParticlesApp from "../canvas/particle/App"

const canvas = ref(null)
const fullscreen = ref(false)

watchEffect(() => {
  if (!canvas.value || !document.fullscreenEnabled) return
  if (fullscreen.value) {
    !document.fullscreenElement && canvas.value.requestFullscreen()
  } else if (document.fullscreenElement) {
    document.exitFullscreen()
  }
})

onMounted(() => {
  new ParticlesApp(canvas.value)
  document.onfullscreenchange = () => {
    fullscreen.value = !!document.fullscreenElement
  }
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
.canvas {
  height: 100%;
  cursor: none;
}
.fullscreen.canvas {
}
</style>
