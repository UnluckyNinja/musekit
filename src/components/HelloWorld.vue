<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <button class="black" @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
let component = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    }
  },
})
export default component
</script>
