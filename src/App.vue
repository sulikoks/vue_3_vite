<template>
  <main>
    <router-view />
    <div v-if="false" class="content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsa ipsum nemo quas quo repellat reprehenderit ullam voluptates? Aliquid atque consequatur dolores error, fuga id inventore quia rem! Distinctio, perspiciatis?
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
  margin: 0;
  font-size: 16px;
}
main {
  height: 100%;
}
.content {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 1;
  max-width: 700px;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border-radius: 20px;
  margin: 20px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);

  transform: translateX(-50%);
}
</style>
