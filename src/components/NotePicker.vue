<template>
  <div>
    <button
      v-for="(note, idx) in notes"
      :key="idx"
      :class="{
        black: isBlack[idx],
        'btn-down': selectedNotes.indexOf(idx) >= 0,
      }"
      @click="clicked(idx)"
    >
      {{ note }}
    </button>
    <button
      :class="{
        black: isBlack[0],
        'btn-down': selectedNotes.indexOf(0) >= 0,
      }"
      @click="clicked(0)"
    >
      {{ notes[0] }}
    </button>
  </div>
</template>

<script lang="ts">
import { notes, isBlack } from '/@/data/note'
import { defineComponent, PropType } from 'vue'

const component = defineComponent({
  // props: ["selectedNotes"]
  props: {
    selectedNotes: {
      type: Object as PropType<Array<number>>,
      default: function () {
        return []
      },
    },
  },
  setup() {
    return {
      isBlack: isBlack,
      notes: notes,
    }
  },
  methods: {
    clicked(idx: number) {
      let indexFound = this.selectedNotes.indexOf(idx)
      if (indexFound < 0) {
        this.$emit('update:selectedNotes', [...this.selectedNotes, idx])
      } else {
        let newNotes = [...this.selectedNotes]
        newNotes.splice(indexFound, 1)
        this.$emit('update:selectedNotes', newNotes)
      }
    },
  },
})

export default component
</script>

<style lang="postcss">
button {
  @apply opacity-30;
}
button.btn-down {
  @apply opacity-100;
}
/* .btn-down.black {
  @apply bg-gray-600;
} */
</style>
