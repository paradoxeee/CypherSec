// Matrix rain effect
function createMatrixRain() {
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-rain';
        column.style.left = i * 20 + 'px';
        column.style.animationDuration = (Math.random() * 3 + 2) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';

        let text = '';
        for (let j = 0; j < 20; j++) {
            text += characters[Math.floor(Math.random() * characters.length)] + '\n';
        }
        column.textContent = text;

        document.body.appendChild(column);
    }
}

// Binary rain effect
function createBinaryRain() {
    const container = document.getElementById('binaryRain');
    const columns = Math.floor(window.innerWidth / 15);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = i * 15 + 'px';
        column.style.animationDuration = (Math.random() * 5 + 3) + 's';
        column.style.animationDelay = Math.random() * 3 + 's';

        let binary = '';
        for (let j = 0; j < 50; j++) {
            binary += Math.random() > 0.5 ? '1' : '0';
            if (j % 8 === 7) binary += '\n';
        }
        column.textContent = binary;

        container.appendChild(column);
    }
}

// Boot sequence animation
function animateBootSequence() {
    const lines = document.querySelectorAll('.boot-line');
    lines.forEach((line, index) => {
        line.style.animationDelay = (index * 0.5) + 's';
    });
}

// Typing effect for inputs
function setupTypingEffect() {
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.classList.add('cursor');
        });

        input.addEventListener('blur', function () {
            this.classList.remove('cursor');
        });
    });
}



// Random glitch effects
function randomGlitch() {
    setInterval(() => {
        if (Math.random() < 0.1) {
            const elements = document.querySelectorAll('.boot-line, .form-label, .terminal-title');
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            randomElement.classList.add('glitch');

            setTimeout(() => {
                randomElement.classList.remove('glitch');
            }, 200);
        }
    }, 3000);
}

// Screen flicker effect
function screenFlicker() {
    setInterval(() => {
        if (Math.random() < 0.05) {
            document.body.style.opacity = '0.9';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 50);
        }
    }, 2000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function () {
    createMatrixRain();
    createBinaryRain();
    animateBootSequence();
    setupTypingEffect();
    setupHackerLogin();
    randomGlitch();
    screenFlicker();
});

// Keyboard sounds (visual feedback)
document.addEventListener('keydown', function (e) {
    if (e.target.matches('.form-input')) {
        e.target.style.boxShadow = '0 0 0 2px rgba(0, 255, 65, 0.4), inset 0 0 10px rgba(0, 255, 65, 0.2)';
        setTimeout(() => {
            e.target.style.boxShadow = '0 0 0 2px rgba(0, 255, 65, 0.2), inset 0 0 10px rgba(0, 255, 65, 0.1)';
        }, 100);
    }
});

// Prevent right-click for added mystery
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    const statusArea = document.getElementById('statusArea');
    const warningLine = document.createElement('div');
    warningLine.className = 'status-line error';
    warningLine.textContent = '> WARNING: Unauthorized access attempt detected!';
    statusArea.appendChild(warningLine);
});
