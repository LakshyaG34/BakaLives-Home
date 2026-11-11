import { app } from "./app.js";
import { env } from "./config/env.js";
import { runMigrations } from "./db/migrate.js";
import { closeDatabase } from "./db/pool.js";

let server;

async function shutdown() {
  if (server) await new Promise((resolve) => server.close(resolve));
  await closeDatabase();
}

async function start() {
  await runMigrations();
  server = app.listen(env.port, () => {
    console.log(`Bakalives API listening on port ${env.port}`);
  });
}

start().catch(async (error) => {
  console.error("API startup failed:", error);
  await closeDatabase();
  process.exitCode = 1;
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.once(signal, () => {
    shutdown().catch((error) => {
      console.error("API shutdown failed:", error);
      process.exitCode = 1;
    });
  });
}
