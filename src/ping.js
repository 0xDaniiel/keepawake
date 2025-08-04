// src/ping.js
import http from "http";
import https from "https";

/**
 * Ping the given URL and log status
 */
export function sendPing(url) {
  const lib = url.startsWith("https") ? https : http;

  lib
    .get(url, (res) => {
      console.log(`✅ Pinged ${url} — Status: ${res.statusCode}`);
    })
    .on("error", (err) => {
      console.error(`❌ Failed to ping ${url}: ${err.message}`);
    });
}
