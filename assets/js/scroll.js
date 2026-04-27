// ============================================
// SCROLL EFFECTS & NAV
// assets/js/scroll.js
// ============================================

export function initScrollEffects() {
    // Scroll reveal for sections
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.08 });

    sections.forEach(s => {
        s.style.animationPlayState = 'paused';
        observer.observe(s);
    });

    // Active nav link on scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.querySelectorAll('section[id]').forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(a => a.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { passive: true });

    // Navbar border on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.borderBottomColor = 'var(--border-strong)';
        } else {
            navbar.style.borderBottomColor = 'var(--border)';
        }
    }, { passive: true });
}

export function initCardTilt() {
    document.querySelectorAll('.project-card, .card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const dx = (x - cx) / cx;
            const dy = (y - cy) / cy;
            card.style.transform = `translateY(-5px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg)`;
            card.style.transition = 'box-shadow 0.3s, border-color 0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });
}

export function initSkillBars() {
    const skillSection = document.getElementById('habilidades');
    if (!skillSection) return;

    // Init paused
    document.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.animationPlayState = 'paused';
    });

    let skillsAnimated = false;
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                document.querySelectorAll('.skill-fill').forEach((fill, i) => {
                    fill.style.animationDelay = `${0.1 + i * 0.08}s`;
                    fill.style.animationPlayState = 'running';
                });
            }
        });
    }, { threshold: 0.2 });

    skillObserver.observe(skillSection);
}
