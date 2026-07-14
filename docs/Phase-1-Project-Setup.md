# 📘 Eventify - Phase 1 Notes
## Project Setup

**Date:** 06 July 2026

---

# 🎯 Objective

Set up the development environment and create the initial project structure for the Eventify Full Stack Event Booking System.

---

# ✅ Tasks Completed

## 1. Development Environment Setup

Installed and verified:

- Node.js v22.19.0
- npm v10.9.3
- Git v2.55.0.windows.2
- Visual Studio Code
- Postman

---

## 2. Project Structure

Created the root project folder.

```
Eventify/
│
├── client/
├── server/
├── docs/
├── .gitignore
└── README.md
```

---

## 3. Git

Installed Git successfully.

Verified installation using:

```bash
git --version
```

Output:

```
git version 2.55.0.windows.2
```

---

## 4. React Project

Created the React application using Vite inside the client folder.

Commands used:

```bash
cd client

npm create vite@latest .

npm install

npm run dev
```

Selected:

- Framework → React
- Variant → JavaScript
- Linter → ESLint

---

## 5. React Application

Successfully started the development server.

```
http://localhost:5173
```

Verified that Hot Module Replacement (HMR) was working.

---

## 6. Cleaned Default Template

Modified:

- App.jsx
- main.jsx
- index.css

Removed the default Vite demo content and replaced it with a simple Eventify welcome page.

---

# 📚 Concepts Learned

## Node.js

- JavaScript runtime
- Used to build backend applications
- Executes JavaScript outside the browser

---

## npm

Node Package Manager

Used for:

- Installing packages
- Running scripts
- Managing dependencies

Examples:

```bash
npm install
npm run dev
```

---

## Git

Version Control System

Used for:

- Tracking changes
- Working with GitHub
- Collaboration
- Maintaining project history

---

## Vite

Modern React build tool.

Advantages:

- Fast startup
- Instant Hot Reload
- Optimized builds
- Preferred over Create React App for modern projects

---

## HMR (Hot Module Replacement)

After saving a file, the browser updated automatically without manually refreshing the page.

---

# 🐞 Errors Faced

## Error 1

### Problem

PowerShell blocked npm commands.

```
npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

### Cause

PowerShell Execution Policy was blocking scripts.

### Solution

Executed:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Restarted VS Code.

The problem was resolved.

---

## Error 2

### Problem

Git command not recognized.

```
'git' is not recognized as an internal or external command
```

### Cause

Git was not installed.

### Solution

Installed Git from the official website.

Verified using:

```bash
git --version
```

---

# 📂 Current Project Structure

```
Eventify/
│
├── client/
│
├── server/
│
├── docs/
│
├── .gitignore
│
└── README.md
```

---

# ✅ Phase 1 Completed

Successfully completed:

- Development environment setup
- Git installation
- Project initialization
- React installation
- Vite configuration
- Initial project structure

---

# 🚀 Next Phase

Phase 2

Topics:

- Tailwind CSS
- React Router
- Navbar
- Footer
- Layout
- Home Page
- Responsive Design

---

# 💡 Key Takeaways

- Always understand **why** a technology is used before using it.
- Build projects incrementally instead of creating everything on day one.
- Read and understand error messages before searching for fixes.
- Keep project notes after every phase for future reference.