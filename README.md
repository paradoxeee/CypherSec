# CYPHER-SEC 🔐

<div align="center">

![CYPHER-SEC Banner](/screenshots/banner.png)

*A cyberpunk-themed authentication system with Matrix rain effect and hacker aesthetics*

[![Python](https://img.shields.io/badge/Python-3.13+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Node.js](https://img.shields.io/badge/Node.js-23.11+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![License](https://img.shields.io/badge/License-Custom-00FF00?style=for-the-badge)](#license)

[🎥 Demo Video](#demo) • [📖 Documentation](#installation) • [🤝 Contributing](#contributing)

</div>

---

## 🚀 Overview

**CYPHER-SEC** is a cybersecurity-themed authentication system that combines a sleek hacker-style web interface with a secure Python client for user registration. The project features a Matrix rain background, terminal-inspired design, and a unique two-tier authentication approach.

### ✨ Key Features

- **🎨 Cyberpunk UI**: Matrix rain effect, terminal aesthetics, and hacker-themed design
- **🔐 Secure Authentication**: bcrypt password hashing with 10 rounds
- **🐍 Python Client**: Exclusive registration system via dedicated client
- **🌐 Web Dashboard**: Modern login interface with security-themed visuals
- **⚡ RESTful API**: Express.js backend with CORS support
- **📁 File-based Storage**: JSON-based user data management

## 📸 Screenshots

### Login Interface
![Login Interface](/screenshots/login.png)
*Matrix-themed login page with secure access terminal*

### Dashboard
![Dashboard](/screenshots/dashboard.png)
*Cybersecurity dashboard with system monitoring tools*

## 🏗️ Architecture

```
CypherSec/
├── backend/
│   ├── server.js          # Express.js server
│   └── users.json         # User data storage
├── public/
│   ├── index.html         # Login page
│   ├── dashboard.html     # Main dashboard
│   ├── style.css          # Cyberpunk styling
│   └── script.js          # Frontend logic
└── client-auth/
    ├── main.py            # Registration client
    ├── function.py        # Helper functions
    ├── logo.py            # ASCII art logo
    └── requirements.txt   # Python dependencies
```

## 🛠️ Installation

### Prerequisites

- **Python 3.** 
- **Node.js+**
- **npm** (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/paradoxeee/cypher-sec.git
cd cypher-sec
```

### 2. Backend Setup

```bash
cd backend
npm install express cors bcrypt
```

### 3. Python Client Setup

```bash
cd ../client-auth
pip install -r requirements.txt
```

### Dependencies Overview

**Backend (Node.js)**:
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `bcrypt` - Password hashing
- `fs` - File system operations

**Client (Python)**:
- `requests` - HTTP requests
- `rich` - Beautiful terminal output
- `subprocess` - System commands
- `platform` - System information

## 🚀 Usage

### Starting the Server

```bash
cd backend
# Development mode
nodemon server.js

# Production mode  
node server.js
```

The server will start on `http://localhost:3000/index.html`

### User Registration

1. **Launch the Python Client**:
```bash
cd client-auth
python main.py
```

2. **Follow the Interactive Prompts**:
   - Enter username
   - Enter password
   - Confirm registration

3. **Access the Web Interface**:
   - Navigate to `http://localhost:3000`
   - Login with your credentials

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | Create new user account |
| `POST` | `/login` | User authentication |
| `GET` | `/dashboard` | Access dashboard (authenticated) |

## 🔒 Security Features

- **Password Hashing**: bcrypt with 10 salt rounds
- **Client-Only Registration**: Prevents unauthorized account creation
- **File-based Storage**: JSON user data with hashed passwords
- **CORS Enabled**: Currently open for development (customize for production)

> ⚠️ **Note**: This project is designed for educational purposes. For production use, consider implementing JWT tokens, session management, and stricter CORS policies.

## 🎥 Demo

[🎬 Watch the full demonstration video](https://www.youtube.com/watch?v=_aRQ83i6X3c)

*See CYPHER-SEC in action with complete registration and login flow*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests, report bugs, or suggest new features.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Roadmap

- [ ] JWT token implementation
- [ ] Session management
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Enhanced security features
- [ ] Multi-factor authentication
- [ ] API rate limiting
- [ ] Docker containerization

## 📄 License

This project is licensed under a **Custom License**.

**Terms**:
- ✅ **Use**: Free to use for personal and commercial projects
- ✅ **Modify**: You can modify and adapt the code
- ✅ **Distribute**: You can distribute modified versions
- ⚠️ **Attribution Required**: You must credit the original author

**Attribution**: When using or distributing this software, please include:
> Original work by **Gianni Gualtieri (paradoxeee)**

## 👨‍💻 Author

**Gianni Gualtieri** *(paradoxeee)*
- 📧 Email: [contact@giannigualtieri.fr](mailto:contact@giannigualtieri.fr)
- 🌐 Portfolio: [www.giannigualtieri.fr](https://www.giannigualtieri.fr)
- 💼 LinkedIn: [gianni-gualtieri](https://linkedin.com/in/gianni-gualtieri)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

*Built with ❤️ and lots of ☕ by [paradoxeee](https://github.com/paradoxeee)*

</div>
