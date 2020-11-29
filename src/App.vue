import { defineComponent } from 'vue'
<template>
  <img class="mx-auto my-4 w-1/12" alt="logo" src="./assets/logo.svg" />
  <h1 class="text-7xl my-4">Muse Kit</h1>
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <ScaleFinder class="m-8" />
  <div class="m-6 select-none">
    <a
      class="text-2xl font-bold"
      href="https://github.com/UnluckyNinja/musekit"
    >
      <img
        class="m-4 inline-block"
        src="/@/assets/Github-Mark-32px.png"
        alt="Github Icon"
      />
      <span>Github Repo</span>
    </a>
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
