import { defineComponent } from 'vue'
<template>
  <div class="app-body">
    <main class="app-main">
      <img class="mx-auto my-4 w-1/12" alt="logo" src="./assets/logo.svg" />
      <h1 class="text-7xl my-4">Muse Kit</h1>
      <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
      <ScaleFinder class="m-8" />
    </main>
    <footer class="app-footer select-none">
        <a
          class="text-2xl font-bold flex place-items-center"
          href="https://github.com/UnluckyNinja/musekit"
        >
          <img
            class="m-2 inline-block"
            src="/@/assets/Github-Mark-32px.png"
            alt="Github Icon"
          />
          <span class="m-2">Github Repo</span>
        </a>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import NotePicker from './components/NotePicker.vue'
import ScaleFinder from './components/ScaleFinder.vue'

let component = defineComponent({
  name: 'App',
  data() {
    return {
      selectedNotes: [],
    }
  },
  components: {
    HelloWorld,
    NotePicker,
    ScaleFinder,
  },
})
export default component
</script>
<style lang="postcss" scoped>
.app-body {
  @apply min-h-screen relative;
}
.app-main {
  @apply p-10 pb-20;
}
.app-footer {
  @apply absolute bottom-0 w-full h-20 flex place-content-center align-middle;
}
</style>