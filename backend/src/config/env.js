import "dotenv/config";

const allowedOrigins = (process.env.CLIENT_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

export const env = {
  port: Number(process.env.PORT || 4000),
  databaseUrl: process.env.DATABASE_URL,
  databaseSsl: process.env.DB_SSL === "true",
  databasePoolMax: Number(process.env.DB_POOL_MAX || 10),
  allowedOrigins,
};

if (!env.databaseUrl) {
  throw new Error("DATABASE_URL must be set");
}
