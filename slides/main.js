import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import './styles.css';

import RevealMermaid from 'reveal.js-mermaid-plugin';

import 'highlight.js/styles/atom-one-dark.css';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

const deck = new Reveal();
deck.initialize({
  center: true,
  margin: 0,
  controlsLayout: 'bottom-right',
  plugins: [Highlight, RevealMermaid],
  hash: true,
  slideNumber: true,
  transition: 'slide',
});
