// ============================================
// TYPING EFFECT (Hero prompt)
// assets/js/typing.js
// ============================================

const COMMANDS = [
    'nmap -sV -p- target.local',
    'sqlmap -u "http://target/login"',
    'msfconsole -q',
    'use exploit/multi/handler',
    'burpsuite --headless',
    'cat /etc/passwd',
    'whoami && id',
    'python3 exploit.py',
];

export function initTyping() {
    const typedEl = document.getElementById('typed-cmd');
    if (!typedEl) return;

    let cmdIndex   = 0;
    let charIndex  = 0;
    let isDeleting = false;

    function type() {
        const current = COMMANDS[cmdIndex];

        if (!isDeleting) {
            typedEl.textContent = current.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
        } else {
            typedEl.textContent = current.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                cmdIndex = (cmdIndex + 1) % COMMANDS.length;
            }
        }

        setTimeout(type, isDeleting ? 38 : 72);
    }

    setTimeout(type, 1400);
}
