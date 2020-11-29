<template>
  <div>
    <NotePicker class="m-4" v-model:selectedNotes="selectedNotes" />
    <div class="m-2 text-xl">
      <input
        class="w-12 scale-150 transform"
        type="checkbox"
        name="mode filter"
        id=""
        v-model="fullModes"
      />
      <span >Full Modes / Only Major/Minor</span>
    </div>
    <div class="note-grid">
      <div
        v-for="scale in matchedScales"
        :key="scale.name"
        class="note-grid-row"
      >
        <span class="col-span-2">{{ scale.name }}</span>
        <div v-for="(note, idx) in scale.notes" :key="idx" class="">
          <span :class="[isBlack[note] ? 'black' : '']">{{ notes[note] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { notes, isBlack, modes, scaleOf } from '/@/data/note'
import NotePicker from '/@/components/NotePicker.vue'

interface Scale {
  name: string
  base: number
  mode: number
  notes: number[]
}

const component = defineComponent({
  components: {
    NotePicker,
  },
  // props: ["selectedNotes"]
  props: {},
  setup() {
    let scales = ref<Scale[]>([])
    let selectedNotes = ref<number[]>([])
    let fullModes = ref(true)
    // loop for all combinations
    notes.forEach((base, baseidx) => {
      modes.forEach((mode, modeidx) => {
        let scale = {
          name: [base, mode].join(' '),
          base: baseidx,
          mode: modeidx,
          notes: scaleOf(baseidx, modeidx),
        }
        scales.value.push(scale)
      })
    })
    let matchedScales = computed(() => {
      let result
      if (selectedNotes.value.length === 0) {
        result = scales.value
      }
      // filter out that match
      result = scales.value.filter((scale) => {
        // contains every note
        return selectedNotes.value.every((note) => {
          // contains that note
          return scale.notes.indexOf(note) >= 0
        })
      })
      if (!fullModes.value) {
        result = result.filter((it) => it.mode === 0 || it.mode === 5)
      }
      return result
    })

    return {
      scales,
      notes,
      isBlack,
      modes,
      selectedNotes,
      matchedScales,
      fullModes,
    }
  },
  methods: {},
})

export default component
</script>

<style lang="postcss">
.note-grid-row {
  @apply p-4;
  @apply grid grid-cols-10;
  @apply border rounded;
}
.note-grid {
  @apply container mx-auto lg:px-64 grid grid-cols-1 gap-1;
  @apply text-2xl;
}
</style>
