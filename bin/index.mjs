#!/usr/bin/env node
import http from "http";
import https from "https";

async function main() {
  const args = process.argv.slice(2);
  const urlArg = args.find((arg) => arg.startsWith("http"));
  const isLocal = args.includes("--local");
  const isOnce = args.includes("--once");
  const intervalArg = args.find((arg) => arg.startsWith("--interval="));
  const interval = intervalArg
    ? parseInt(intervalArg.split("=")[1], 10) * 1000
    : 5 * 60 * 1000; // 5 min default

  // ✅ Help & Version
  const showHelp = args.includes("--help") || args.includes("-h");
  const showVersion = args.includes("--version") || args.includes("-v");

  if (showHelp) {
    console.log(`
📦 keepawake - Prevent apps from sleeping

Usage:
  keepawake <url> [options]

Options:
  --interval=<seconds>   Set ping interval (default: 300)
  --once                 Send a single ping and exit
  --local                Keep local process awake with log pings
  -h, --help             Show help message
  -v, --version          Show version info
`);
    return;
  }

  if (showVersion) {
    console.log("keepawake v1.0.0");
    return;
  }

  // 🛡️ Local mode
  if (isLocal) {
    console.log(
      "🛡️  Keepawake local mode activated — keeping process alive.\n"
    );
    setInterval(() => {
      console.log("⏳ Still awake...");
    }, interval);
    return;
  }

  // ❌ No URL
  if (!urlArg) {
    console.error("❌ Please provide a URL to ping.");
    console.log(
      "Usage: keepawake <url> [--once] [--interval=seconds] [--local]"
    );
    process.exit(1);
  }

  const lib = urlArg.startsWith("https") ? https : http;

  // 📡 Ping logic
  function sendPing() {
    lib
      .get(urlArg, (res) => {
        console.log(`✅ Pinged ${urlArg} — Status: ${res.statusCode}`);
      })
      .on("error", (err) => {
        console.error(`❌ Failed to ping ${urlArg}: ${err.message}`);
      });
  }

  if (isOnce) {
    console.log(`📡 Sending one ping to: ${urlArg}`);
    sendPing();
    return;
  }

  console.log(
    `📡 Starting keepawake pings to: ${urlArg} every ${interval / 1000}s`
  );
  sendPing();
  setInterval(sendPing, interval);
}

main();
