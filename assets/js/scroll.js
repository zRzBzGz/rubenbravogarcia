// ============================================
// SCROLL EFFECTS & NAV
// assets/js/scroll.js
// ============================================

export function initScrollEffects() {
    // ── Scroll reveal for sections ──────────────────────
    const sections = document.querySelectorAll('.section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                revealObserver.unobserve(entry.target); // only trigger once
            }
        });
    }, { threshold: 0.06 });

    sections.forEach(s => {
        s.style.animationPlayState = 'paused';
        revealObserver.observe(s);
    });

    // ── Active nav link on scroll ────────────────────────
    const navLinks = [
        ...document.querySelectorAll('.nav-links a'),
        ...document.querySelectorAll('.nav-mobile-drawer a'),
    ];

    const sectionEls = document.querySelectorAll('section[id]');

    const activeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sectionEls.forEach(s => activeObserver.observe(s));

    // ── Navbar border on scroll ──────────────────────────
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => {
            navbar.style.borderBottomColor = window.scrollY > 20
                ? 'var(--border-strong)'
                : 'var(--border)';
        };
        window.addEventListener('scroll', onScroll, { passive: true });
    }
}

export function initCardTilt() {
    // Only apply tilt on fine-pointer devices (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.querySelectorAll('.project-card, .card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const dx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
            const dy = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
            card.style.transform  = `translateY(-4px) rotateX(${-dy * 2.5}deg) rotateY(${dx * 2.5}deg)`;
            card.style.transition = 'box-shadow 0.3s, border-color 0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform  = '';
            card.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });
}

export function initSkillBars() {
    const skillSection = document.getElementById('habilidades');
    if (!skillSection) return;

    // Start bars paused
    document.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.animationPlayState = 'paused';
    });

    let skillsAnimated = false;
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                document.querySelectorAll('.skill-fill').forEach((fill, i) => {
                    fill.style.animationDelay     = `${0.08 + i * 0.07}s`;
                    fill.style.animationPlayState = 'running';
                });
                skillObserver.disconnect();
            }
        });
    }, { threshold: 0.15 });

    skillObserver.observe(skillSection);
}
