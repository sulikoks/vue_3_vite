<template>
  <div ref="canvas"></div>
</template>

<script>
import {onMounted, ref} from "vue"
import { init } from "../three/car/Car";

export default {
  name: 'HomePage',
  setup() {
    const canvas = ref(null)

    onMounted(async () => {
      await init(canvas.value);
    })

    return {
      canvas
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
