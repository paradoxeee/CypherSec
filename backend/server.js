// Import modules to use
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

// Create the application express on port 3000
const app = express();
const PORT = 3000;


// Use cors to communicate with the front, and add json
app.use(cors());
app.use(express.json());

// Add the file path
const USERS_FILE = "./users.json";


// Initializing the user file
function initializeUsersFile() {
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
        console.log('Users file created with an empty table');
    }
}
initializeUsersFile()

// New user registration
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(USERS_FILE));

    const userExists = users.find(u => u.username === username);
    if (userExists) {
        return res.status(400).json({ message: "Already existing user." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    res.status(201).json({ message: "Registered user." });
});

// Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(USERS_FILE));

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ message: "Incorrect password" });
    }
    console.log(`${username} has established a connection`)
    res.status(200).json({ success: true, message: `Hey ${username} !` });

});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
