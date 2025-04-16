import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/night.css'
import './styles.css'

import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import 'reveal.js/plugin/highlight/monokai.css'
import RevealMermaid from 'reveal.js-mermaid-plugin'

const deck = new Reveal()
deck.initialize({ 
  center: true,
  margin: 0.01,
  controlsLayout: 'bottom-right',
  plugins: [Highlight, RevealMermaid],
  hash: true, 
  slideNumber: true,
  transition: 'slide'
})