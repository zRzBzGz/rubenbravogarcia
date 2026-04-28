// ============================================
// INTERACTIVE TERMINAL
// assets/js/terminal.js
// ============================================

const TERMINAL_COMMANDS = {
    help: {
        description: 'Muestra esta lista de comandos',
        handler: () => `
<span class="t-cyan">╔══════════════════════════════════════════╗</span>
<span class="t-cyan">║</span>   <span class="t-green">rbg@kali — comandos disponibles</span>         <span class="t-cyan">║</span>
<span class="t-cyan">╚══════════════════════════════════════════╝</span>

  <span class="t-green">whoami</span>       → Scroll a "Sobre mí"
  <span class="t-green">xp</span>           → Scroll a "Experiencia"
  <span class="t-green">projects</span>     → Scroll a "Proyectos"
  <span class="t-green">skills</span>       → Scroll a "Habilidades"
  <span class="t-green">contact</span>      → Scroll a "Contacto"
  <span class="t-green">help</span>         → Muestra este menú
  <span class="t-green">clear</span>        → Limpia la terminal
  <span class="t-green">ls</span>           → Lista las secciones
  <span class="t-green">cat rbg.json</span> → Info sobre mí en JSON
  <span class="t-green">nmap</span>         → Escaneo de puertos (fun)
  <span class="t-green">status</span>       → Estado actual
  <span class="t-green">theme</span>        → Cambia el tema

<span class="t-muted">// Escribe un comando y pulsa Enter</span>`
    },

    whoami: {
        description: 'Scroll a la sección Sobre mí',
        handler: () => {
            scrollToSection('sobre-mi');
            return `<span class="t-green">[+]</span> Navegando a <span class="t-cyan">whoami</span>...`;
        }
    },

    xp: {
        description: 'Scroll a Experiencia',
        handler: () => {
            scrollToSection('experiencia');
            return `<span class="t-green">[+]</span> Navegando a <span class="t-cyan">experience</span>...`;
        }
    },

    experience: {
        description: 'Alias de xp',
        handler: () => {
            scrollToSection('experiencia');
            return `<span class="t-green">[+]</span> Navegando a <span class="t-cyan">experience</span>...`;
        }
    },

    projects: {
        description: 'Scroll a Proyectos',
        handler: () => {
            scrollToSection('proyectos');
            return `<span class="t-green">[+]</span> Navegando a <span class="t-cyan">projects</span>...`;
        }
    },

    skills: {
        description: 'Scroll a Habilidades',
        handler: () => {
            scrollToSection('habilidades');
            return `<span class="t-green">[+]</span> Navegando a <span class="t-cyan">skills</span>...`;
        }
    },

    contact: {
        description: 'Scroll a Contacto',
        handler: () => {
            scrollToSection('contacto');
            return `<span class="t-green">[+]</span> Navegando a <span class="t-cyan">contact</span>...`;
        }
    },

    ls: {
        description: 'Lista secciones',
        handler: () => `<span class="t-cyan">drwxr-xr-x</span>  <span class="t-green">sobre-mi/</span>
<span class="t-cyan">drwxr-xr-x</span>  <span class="t-green">experiencia/</span>
<span class="t-cyan">drwxr-xr-x</span>  <span class="t-green">proyectos/</span>
<span class="t-cyan">drwxr-xr-x</span>  <span class="t-green">habilidades/</span>
<span class="t-cyan">drwxr-xr-x</span>  <span class="t-green">contacto/</span>
<span class="t-yellow">-rw-r--r--</span>  rbg.json
<span class="t-yellow">-rw-r--r--</span>  README.md`
    },

    'cat rbg.json': {
        description: 'Muestra datos en JSON',
        handler: () => `<span class="t-gray">{</span>
  <span class="t-key">"nombre"</span><span class="t-gray">:</span> <span class="t-str">"Rubén Bravo García"</span><span class="t-gray">,</span>
  <span class="t-key">"ubicacion"</span><span class="t-gray">:</span> <span class="t-str">"Madrid, España"</span><span class="t-gray">,</span>
  <span class="t-key">"titulacion"</span><span class="t-gray">:</span> <span class="t-str">"ASIR"</span><span class="t-gray">,</span>
  <span class="t-key">"foco"</span><span class="t-gray">:</span> <span class="t-arr">[</span><span class="t-str">"CyberSec Ofensiva"</span><span class="t-gray">, </span><span class="t-str">"Pentesting"</span><span class="t-arr">]</span><span class="t-gray">,</span>
  <span class="t-key">"disponible"</span><span class="t-gray">:</span> <span class="t-bool">true</span><span class="t-gray">,</span>
  <span class="t-key">"buscando"</span><span class="t-gray">:</span> <span class="t-str">"primer empleo en ciberseguridad"</span>
<span class="t-gray">}</span>`
    },

    nmap: {
        description: 'Fun nmap simulation',
        handler: () => `<span class="t-cyan">[*]</span> Starting Nmap scan on portfolio.local...
<span class="t-cyan">[*]</span> Scanning 1 host...

PORT     STATE  SERVICE    VERSION
<span class="t-green">80/tcp   open   http       Apache/2.4</span>
<span class="t-green">443/tcp  open   https      OpenSSL</span>
<span class="t-yellow">22/tcp   open   ssh        OpenSSH 9.0</span>
<span class="t-red">31337/tcp filtered elite</span>

<span class="t-green">[+]</span> OS: <span class="t-white">Kali Linux 2024.x</span>
<span class="t-green">[+]</span> 3 open ports found
<span class="t-muted">// Nmap done — 1 IP address scanned</span>`
    },

    status: {
        description: 'Estado actual',
        handler: () => `<span class="t-cyan">[*]</span> Comprobando estado del sistema...

  <span class="t-green">●</span> Disponible para trabajar    <span class="t-green">ACTIVO</span>
  <span class="t-green">●</span> Open to remote/hybrid       <span class="t-green">SÍ</span>
  <span class="t-green">●</span> Madrid, España               <span class="t-green">ONLINE</span>
  <span class="t-yellow">●</span> Certificaciones en curso     <span class="t-yellow">IN PROGRESS</span>
  <span class="t-cyan">●</span> PortSwigger Labs              <span class="t-cyan">TRAINING</span>

<span class="t-muted">// rbg@kali uptime: 22 años</span>`
    },

    theme: {
        description: 'Cambia el tema',
        handler: () => {
            const themeBtn = document.getElementById('theme-toggle');
            if (themeBtn) themeBtn.click();
            const isLight = document.body.classList.contains('light-mode');
            return `<span class="t-green">[+]</span> Tema cambiado a <span class="t-cyan">${isLight ? 'light-mode' : 'dark-mode'}</span>`;
        }
    },

    clear: {
        description: 'Limpia la terminal',
        handler: () => null
    },

    readme: {
        description: 'README del portfolio',
        handler: () => `<span class="t-cyan"># Rubén Bravo García — Portfolio</span>

<span class="t-muted">## Sobre este proyecto</span>
Portfolio personal construido con HTML, CSS y JS puro.
Sin frameworks, sin dependencias — código limpio.

<span class="t-muted">## Stack</span>
  - HTML5 semántico
  - CSS3 con variables y animaciones
  - JavaScript vanilla modular
  - Canvas API para partículas

<span class="t-green">→ v1.0.0 · 2026</span>`
    }
};

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}

function initInteractiveTerminal() {
    const terminalBody = document.getElementById('terminal-body');
    if (!terminalBody) return;

    terminalBody.innerHTML = `
        <div class="t-line"><span class="t-cyan">[*]</span> Terminal interactiva iniciada</div>
        <div class="t-line t-fade"><span class="t-green">[+]</span> Escribe <span class="t-white">help</span> para ver los comandos</div>
        <div class="t-line t-fade t-muted">// rbg@kali ~/portfolio — ready</div>
        <div class="t-output-area" id="t-output"></div>
        <div class="t-input-line" id="t-input-line">
            <span class="t-prompt-mini"><span class="t-green-mini">rbg</span><span class="t-muted-mini">@</span><span class="t-blue-mini">kali</span><span class="t-muted-mini">:</span><span class="t-yellow-mini">~$</span></span>
            <input
                type="text"
                id="t-input"
                class="t-input-field"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                placeholder="escribe un comando..."
                aria-label="Terminal input"
            />
        </div>
    `;

    const input  = document.getElementById('t-input');
    const output = document.getElementById('t-output');
    let commandHistory = [];
    let historyIndex   = -1;

    function addOutput(html) {
        const div = document.createElement('div');
        div.classList.add('t-result');
        div.innerHTML = html;
        output.appendChild(div);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function addCommandEcho(cmd) {
        const div = document.createElement('div');
        div.classList.add('t-line', 't-cmd-echo');
        div.innerHTML = `<span class="t-green-mini">rbg</span><span class="t-muted-mini">@kali:~$</span> <span class="t-white">${escapeHtml(cmd)}</span>`;
        output.appendChild(div);
    }

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function processCommand(rawCmd) {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        commandHistory.unshift(rawCmd.trim());
        if (commandHistory.length > 20) commandHistory.pop();
        historyIndex = -1;

        addCommandEcho(rawCmd.trim());

        if (cmd === 'clear') {
            output.innerHTML = '';
            addOutput(`<span class="t-muted">// Terminal cleared · type <span class="t-green">help</span> for commands</span>`);
            return;
        }

        const command = TERMINAL_COMMANDS[cmd];
        if (command) {
            const result = command.handler();
            if (result !== null) addOutput(result);
        } else {
            const suggestions = Object.keys(TERMINAL_COMMANDS)
                .filter(k => k.includes(cmd) || cmd.includes(k.split(' ')[0]))
                .slice(0, 3);

            let errorMsg = `<span class="t-red">bash: ${escapeHtml(cmd)}: command not found</span>`;
            if (suggestions.length > 0) {
                errorMsg += `\n<span class="t-muted">¿Quisiste decir? ${suggestions.map(s => `<span class="t-green">${s}</span>`).join(', ')}</span>`;
            }
            errorMsg += `\n<span class="t-muted">Escribe <span class="t-green">help</span> para ver los comandos</span>`;
            addOutput(errorMsg);
        }

        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = input.value;
            input.value = '';
            processCommand(val);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = -1;
                input.value  = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const partial = input.value.trim().toLowerCase();
            if (!partial) return;
            const matches = Object.keys(TERMINAL_COMMANDS).filter(k => k.startsWith(partial));
            if (matches.length === 1) {
                input.value = matches[0];
            } else if (matches.length > 1) {
                addCommandEcho(partial);
                addOutput(matches.map(m => `<span class="t-green">${m}</span>`).join('  '));
            }
        }
    });

    // Tap anywhere in terminal to focus input (useful on mobile)
    terminalBody.addEventListener('click', () => input.focus());
}

// Expose to global scope so main.js can call it
window.initInteractiveTerminal = initInteractiveTerminal;
