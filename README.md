# 🟢 keepawake

A tiny CLI tool that keeps your projects alive — whether it's a hosted app (like Glitch, Cyclic, or Replit) or a local dev server you don’t want to fall asleep.

---

## 🔧 Features

- 🌍 **Ping-based Keep-Alive**  
  Automatically sends pings to your deployed project’s URL to prevent it from going idle or sleeping.

- 💻 **Local Dev Stabilizer**  
  Keeps a background Node.js process alive to prevent your local development environment from freezing or shutting down when your system sleeps.

---

## 📦 Installation

```
npm install -g @0xDaniiel/keepawake
```

**Or use locally with npx:**
npx @0xDaniiel/keepawake https://your-app.com

## 🚀 Usage

**🔁 Ping a Live Project**
Use this to keep online platforms like Replit, Glitch, or Cyclic from timing out

```
keepawake  https://your-live-app.com
```

This sends a heartbeat to your URL every 5 minutes.

## 💻 Keep a Local Process Awake

Use this during development to prevent your terminal from shutting down after inactivity.

```
keepawake local
```

This logs a heartbeat message every minute and keeps the session alive.

## 🏷️ Flags

`-- interval=<seconds> ` : Set how often to ping (default is every 300 seconds / 5 minutes)  
 `-- once` : Send just one ping, then exit  
 `-- local ` : Keep your local terminal session awake  
 `-- help ` or `-h` : Show the help menu  
 `-- version ` or `-v `: Show the current version
