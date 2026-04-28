// ============================================
// CANVAS PARTICLE BACKGROUND
// assets/js/particles.js
// ============================================

export function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Particle {
        constructor() { this.reset(); }

        reset() {
            this.x      = Math.random() * W;
            this.y      = Math.random() * H;
            this.size   = Math.random() * 1.8 + 0.3;
            this.speedX = (Math.random() - 0.5) * 0.25;
            this.speedY = (Math.random() - 0.5) * 0.25;
            this.opacity = Math.random() * 0.4 + 0.05;

            const r = Math.random();
            if (r > 0.65) {
                this.char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
            } else if (r > 0.4) {
                this.char = String.fromCharCode(48 + Math.floor(Math.random() * 10));
            } else if (r > 0.2) {
                this.char = ['0x','ff','A3','00','DE','AD'][Math.floor(Math.random() * 6)];
            } else {
                this.char = ['>','<','/','{','}','#','$','!','&','|','\\'][Math.floor(Math.random() * 11)];
            }
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
        }

        draw() {
            const isDark = document.body.classList.contains('dark-mode');
            ctx.globalAlpha = this.opacity * (isDark ? 1 : 0.22);
            ctx.fillStyle   = isDark ? '#00ff88' : '#c96a00';
            ctx.font        = `${7 + this.size * 3.5}px JetBrains Mono, monospace`;
            ctx.fillText(this.char, this.x, this.y);
        }
    }

    // Fewer particles on mobile for performance
    const count = window.innerWidth < 640 ? 45 : 90;
    for (let i = 0; i < count; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}
