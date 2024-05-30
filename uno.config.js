// uno.config.ts
import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetUno, transformerDirectives } from 'unocss'

const textColors = {
  pri: 'var(--m-pri)',
  sec: 'var(--m-sec)',
  ter: 'var(--m-ter)',
  err: 'var(--m-err)',
  'on-pri': 'var(--m-on-pri)',
  'on-sec': 'var(--m-on-sec)',
  'on-ter': 'var(--m-on-ter)',
  'on-err': 'var(--m-on-err)',
  'on-pri-c': 'var(--m-on-pri-c)',
  'on-sec-c': 'var(--m-on-sec-c)',
  'on-ter-c': 'var(--m-on-ter-c)',
  'on-err-c': 'var(--m-on-err-c)',
  'on-sur': 'var(--m-on-sur)',
  'on-sur-var': 'var(--m-on-sur-var)',
  out: 'var(--m-out)',
  'out-var': 'var(--m-out-var)',
  'inv-on-sur': 'var(--m-inv-on-sur)',
  'inv-pri': 'var(--m-inv-pri)'
}

const bgColors = {
  pri: 'var(--m-pri)',
  sec: 'var(--m-sec)',
  ter: 'var(--m-ter)',
  err: 'var(--m-err)',
  'pri-c': 'var(--m-pri-c)',
  'sec-c': 'var(--m-sec-c)',
  'ter-c': 'var(--m-ter-c)',
  'err-c': 'var(--m-err-c)',
  'sur-dim': 'var(--m-sur-dim)',
  sur: 'var(--m-sur)',
  'sur-bri': 'var(--m-sur-bri)',
  'sur-c-lowest': 'var(--m-sur-c-lowest)',
  'sur-c-low': 'var(--m-sur-c-low)',
  'sur-c': 'var(--m-sur-c)',
  'sur-c-high': 'var(--m-sur-c-high)',
  'sur-c-highest': 'var(--m-sur-c-highest)',
  out: 'var(--m-out)',
  'out-var': 'var(--m-out-var)',
  'inv-sur': 'var(--m-inv-sur)',
  'inv-pri': 'var(--m-inv-pri)'
}

export default defineConfig({
  theme: {
    colors: {
      ...textColors,
      ...bgColors
    },
    breakpoints: {
      xs: '0px',
      sm: '600px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx()
  ],
  safelist: [
    ...Object.keys(textColors).map(x => `text-${x}`),
    ...Object.keys(bgColors).map(x => `bg-${x}`)
  ],
  transformers: [
    transformerDirectives()
  ]
})
