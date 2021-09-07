<template>
  <div ref="canvas" class="canvas" :class="{ fullscreen }" @dblclick="fullscreen = !fullscreen" />
</template>

<script>
import { ref, watchEffect, onMounted } from "vue"
import router from "../router";
import ParticlesApp from "../canvas/particle/App"
import MeshApp from "../canvas/mesh/App"

export default {
  name: 'Canvas',
  setup() {
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
      if (router.currentRoute.value.meta.type === 'mesh') {
        new MeshApp(canvas.value)
      } else {
        new ParticlesApp(canvas.value)
      }
      document.onfullscreenchange = () => {
        fullscreen.value = !!document.fullscreenElement
      }
    })

    return {
      canvas,
      fullscreen
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
  //cursor: none;
  background: rgba(17, 17, 19, 1);
}
.fullscreen.canvas {
}
</style>
