// ============================================
// MAIN ENTRY POINT
// assets/js/main.js
// ============================================

import { initTheme }       from './theme.js';
import { initCursor }      from './cursor.js';
import { initTyping }      from './typing.js';
import { initParticles }   from './particles.js';
import { initScrollEffects, initCardTilt, initSkillBars } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (window.innerWidth > 768) {
        initCursor();
    }
    initTyping();
    initParticles();
    initScrollEffects();
    initCardTilt();
    initSkillBars();

    // Terminal is loaded via separate script tag (non-module, no import needed)
    if (typeof window.initInteractiveTerminal === 'function') {
        window.initInteractiveTerminal();
    }
});
