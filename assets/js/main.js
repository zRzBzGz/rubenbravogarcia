// ============================================
// MAIN ENTRY POINT
// assets/js/main.js
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    
    // BLOQUEO RADICAL DEL CURSOR EN MÓVIL
    if (window.innerWidth > 1024) { // Solo en pantallas de ordenador (más de 1024px)
        initCursor();
    } else {
        // Opcional: eliminar los elementos del HTML si es móvil para estar seguros
        const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        if(dot) dot.remove();
        if(ring) ring.remove();
    }

    initTyping();
    initParticles();
    // ... resto de tus funciones
});

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
