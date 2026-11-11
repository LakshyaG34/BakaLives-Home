import { runMigrations } from "./migrate.js";
import { closeDatabase } from "./pool.js";

try {
  await runMigrations();
} catch (error) {
  console.error("Database migration failed:", error);
  process.exitCode = 1;
} finally {
  await closeDatabase();
}
