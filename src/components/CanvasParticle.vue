<template>
  <div ref="canvas" class="canvas"></div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { createParticle } from "../canvas/particle"

const canvas = ref(null)

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
