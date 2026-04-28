// ============================================
// THEME TOGGLE
// assets/js/theme.js
// ============================================

export function initTheme() {
    const themeBtn = document.querySelector('#theme-toggle');
    const body     = document.body;
    if (!themeBtn) return;

    function updateIcon() {
        const icon = themeBtn.querySelector('.theme-icon');
        if (icon) icon.textContent = body.classList.contains('light-mode') ? '◑' : '◐';
    }

    // Apply saved preference
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
    updateIcon();

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        updateIcon();
    });
}
