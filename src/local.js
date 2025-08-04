// src/local.js

/**
 * Start local mode to prevent dev environment from sleeping
 */
export function startLocalMode(interval) {
  console.log("🛡️  Keepawake local mode activated — keeping process alive.\n");

  setInterval(() => {
    console.log("⏳ Still awake...");
  }, interval);
}
