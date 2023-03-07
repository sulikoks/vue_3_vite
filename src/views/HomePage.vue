<template>
  <div>
    <router-link :to="{ name: 'CanvasParticle' }" >CanvasParticle</router-link>
    <router-link :to="{ name: 'CanvasMesh' }" >CanvasMesh</router-link>
    <router-link :to="{ name: 'CanvasBubbles' }" >CanvasBubbles</router-link>
  </div>
</template>

<script>
import { ref, watchEffect, onMounted } from "vue"

export default {
  name: 'HomePage',
  setup() {
    const canvas = ref(null)

    watchEffect(() => {
    })

    onMounted(() => {
    })

    return {
    }
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;

  a {
    padding: 0 1rem;
  }
}
</style>
