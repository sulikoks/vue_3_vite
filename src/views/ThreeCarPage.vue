<template>
  <div v-show="!loading" ref="canvas"></div>
  <div v-if="loading" class="loading">Loading...</div>
</template>

<script>
import { onMounted, ref } from "vue"
import { init } from "../three/car/Car";

export default {
  name: 'ThreeCarPage',
  setup() {
    const canvas = ref(null)
    const loading = ref(true)

    onMounted(async () => {
      await init(canvas.value);
      loading.value = false
    })

    return {
      canvas,
      loading
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
.loading {
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
