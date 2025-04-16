import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/night.css'
import './styles.css'

import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import 'reveal.js/plugin/highlight/monokai.css'

const deck = new Reveal()
deck.initialize({ 
  plugins: [Highlight],
  hash: true, 
  slideNumber: true,
  transition: 'slide'
})