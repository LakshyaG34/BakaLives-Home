import { app } from "./app.js";
import { env } from "./config/env.js";
import { closeDatabase } from "./db/pool.js";

const server = app.listen(env.port, () => {
  console.log(`Bakalives API listening on port ${env.port}`);
});

async function shutdown() {
  server.close(async () => {
    await closeDatabase();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
