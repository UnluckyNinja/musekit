
const notes = [
  'C',
  'C#/Db',
  'D',
  'D#/Eb',
  'E',
  'F',
  'F#/Gb',
  'G',
  'G#/Ab',
  'A',
  'A#/Bb',
  'B',
]
const isBlack = [
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
]

const modes = [
  'Ionian',
  'Dorian',
  'Phrygian',
  'Lydian',
  'Mixolydian',
  'Aeolian',
  'Locrian',
]

const intervalsOfMode = [
  [2, 2, 1, 2, 2, 2, 1],
  [2, 1, 2, 2, 2, 1, 2],
  [1, 2, 2, 2, 1, 2, 2],
  [2, 2, 2, 1, 2, 2, 1],
  [2, 2, 1, 2, 2, 1, 2],
  [2, 1, 2, 2, 1, 2, 2],
  [1, 2, 2, 1, 2, 2, 2],
]

const scaleOf = (base: number, mode: number) => {
  let scale = intervalsOfMode[mode].reduce((acc: any, cur, idx) => {
    if (idx === 0) return [cur]
    acc.push(acc[idx - 1] + cur)
    return acc
  }, []).map((it: number) => (base + it) % notes.length)
  scale.unshift(base)
  return scale
}
export { notes, isBlack, modes, intervalsOfMode, scaleOf }