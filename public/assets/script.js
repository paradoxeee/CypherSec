function setupHackerLogin() {
    console.log("setupHackerLogin appelé !");
    const form = document.getElementById('accessForm');
    const statusArea = document.getElementById('statusArea');
    const btn = document.querySelector('.access-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        btn.textContent = 'ACCESSING...';
        btn.style.background = 'linear-gradient(135deg, #330000, #660000)';
        statusArea.innerHTML = ''; // Clear status area

        // Appel à l’API pour vérifier les identifiants
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    // Messages de succès
                    const hackingMessages = [
                        '> Initiating handshake protocol...',
                        '> Bypassing firewall... [████████] 100%',
                        '> Decrypting access tokens...',
                        '> Validating biometric signature...',
                        '> Establishing secure tunnel...',
                        '> Access granted. Welcome, Agent.'
                    ];

                    hackingMessages.forEach((msg, index) => {
                        setTimeout(() => {
                            const line = document.createElement('div');
                            line.className = 'status-line success';
                            line.textContent = msg;
                            statusArea.appendChild(line);

                            if (index === hackingMessages.length - 1) {
                                setTimeout(() => {
                                    btn.textContent = 'ACCESS GRANTED';
                                    btn.style.background = 'linear-gradient(135deg, #001a00, #003300)';
                                    btn.classList.add('glitch');
                                    document.querySelector('.terminal-window').classList.add('glitch');
                                    setTimeout(() => {
                                        window.location.href = "/public/login.html";
                                    }, 1000);
                                }, 500);
                            }
                        }, index * 800);
                    });
                } else {
                    // Messages d'erreur
                    const errorMessages = [
                        '> Access attempt detected...',
                        '> Analyzing credentials...',
                        '> WARNING: Invalid password detected!',
                        '> Security protocol activated...',
                        '> ACCESS DENIED!',
                        '> System locked for 30 seconds...'
                    ];

                    errorMessages.forEach((msg, index) => {
                        setTimeout(() => {
                            const line = document.createElement('div');
                            line.className = 'status-line error';
                            line.textContent = msg;
                            statusArea.appendChild(line);

                            if (index === errorMessages.length - 1) {
                                setTimeout(() => {
                                    btn.textContent = 'ACCESS DENIED';
                                    btn.style.background = 'linear-gradient(135deg, #330000, #660000)';
                                    btn.classList.add('glitch');
                                }, 500);
                            }
                        }, index * 800);
                    });
                }
            })
            .catch(err => {
                console.error("Erreur lors de la connexion :", err);
                statusArea.innerHTML = '<div class="status-line error">Erreur serveur.</div>';
                btn.textContent = 'ERROR';
                btn.classList.add('glitch');
            });
    });
}

app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        const users = JSON.parse(fs.readFileSync(USERS_FILE));

        const userExists = users.find(u => u.username === username);
        if (userExists) {
            return res.status(400).json({ message: "Utilisateur déjà existant." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, password: hashedPassword });
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

        res.status(201).json({ message: "Utilisateur enregistré." });
    } catch (err) {
        console.error("Erreur dans /register:", err); // 👈 Ajout ici
        res.status(500).json({ message: "Erreur interne du serveur." });
    }
});




console.log(
  "%c👋 Hey ! Ce site a été créé par Gianni Gualtieri\n📂 Portfolio : https://giannigualtieri.fr\n🐙 GitHub    : https://github.com/paradoxeee",
  "color: lime; font-size: 16px; font-weight: bold;"
);

