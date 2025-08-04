import http from "http";

console.log("🟢 KeepAwake script started.");

// Heartbeat to show it's still running
setInterval(() => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`💓 Still awake at ${timestamp}`);
}, 60 * 1000); // every 60 seconds

// Create a tiny web server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("✅ KeepAwake is running\n");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🌐 Server is running on http://localhost:${PORT}`);
});

// Prevent exit (for CLI use)
process.stdin.resume();
