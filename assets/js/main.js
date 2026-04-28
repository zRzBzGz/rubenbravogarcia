// ============================================
// MAIN ENTRY POINT
// assets/js/main.js
// ============================================

import { initTheme }    from './theme.js';
import { initCursor }   from './cursor.js';
import { initTyping }   from './typing.js';
import { initParticles } from './particles.js';
import { initScrollEffects, initCardTilt, initSkillBars } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Custom cursor only on desktop with fine pointer (mouse)
    const isDesktop = window.matchMedia('(pointer: fine) and (min-width: 1025px)').matches;
    if (isDesktop) {
        initCursor();
    } else {
        // Remove elements entirely so they can't accidentally show
        const dot  = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        if (dot)  dot.remove();
        if (ring) ring.remove();
    }

    initTyping();
    initParticles();
    initScrollEffects();
    initCardTilt();
    initSkillBars();
    initMobileNav();

    // Terminal is loaded via a separate non-module script tag
    if (typeof window.initInteractiveTerminal === 'function') {
        window.initInteractiveTerminal();
    }
});

// ============================================
// MOBILE NAV HAMBURGER
// ============================================
function initMobileNav() {
    const hamburger = document.getElementById('nav-hamburger');
    const drawer    = document.getElementById('nav-mobile-drawer');
    if (!hamburger || !drawer) return;

    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        drawer.setAttribute('aria-hidden', !isOpen);

        if (isOpen) {
            drawer.classList.add('open');
        } else {
            drawer.classList.remove('open');
        }
    });

    // Close drawer when a link is clicked
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            drawer.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
        });
    });

    // Close drawer on outside click
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !drawer.contains(e.target)) {
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            drawer.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
        }
    });
}
