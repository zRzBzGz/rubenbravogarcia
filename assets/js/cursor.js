// ============================================
// CUSTOM CURSOR
// assets/js/cursor.js
// ============================================

export function initCursor() {
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, .project-card, .card, .hex, .soft-tag').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.style.width = '50px';
            cursorRing.style.height = '50px';
            cursorRing.style.borderColor = 'var(--accent)';
            cursorRing.style.opacity = '0.9';
            cursorDot.style.background = 'var(--accent)';
        });
        el.addEventListener('mouseleave', () => {
            cursorRing.style.width = '28px';
            cursorRing.style.height = '28px';
            cursorRing.style.opacity = '0.6';
        });
    });
}
