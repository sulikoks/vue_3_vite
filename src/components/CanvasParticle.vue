<template>
  <div ref="canvas" class="canvas" :class="{ fullscreen, 'hide-cursor': hideCursor }" @dblclick="fullscreen = !fullscreen" />
</template>

<script>
import { ref, watchEffect, onMounted } from "vue"
import router from "../router";
import ParticlesApp from "../canvas/particle/App"
import MeshApp from "../canvas/mesh/App"
import BubblesApp from "../canvas/bubbles/App"

const canvasMap = {
  bubbles: BubblesApp,
  mesh: MeshApp,
  particles: ParticlesApp
}

export default {
  name: 'Canvas',
  setup() {
    const { type } = router.currentRoute.value.meta

    const canvas = ref(null)
    const fullscreen = ref(false)
    const hideCursor = ref(false)

    watchEffect(() => {
      if (!canvas.value || !document.fullscreenEnabled) return
      if (fullscreen.value) {
        !document.fullscreenElement && canvas.value.requestFullscreen()
      } else if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    })

    onMounted(() => {
      new canvasMap[type](canvas.value)
      hideCursor.value = ['particles', 'bubbles'].includes(type)

      document.onfullscreenchange = () => {
        fullscreen.value = !!document.fullscreenElement
      }
    })

    return {
      canvas,
      fullscreen,
      hideCursor
    }
  }
}
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 19, 1);
}
.hide-cursor.canvas {
  cursor: none;
}
.fullscreen.canvas {
}
</style>
