import "dotenv/config";

const allowedOrigins = (process.env.CLIENT_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

export const env = {
  port: Number(process.env.API_PORT || 4000),
  databaseUrl: process.env.SUPABASE_CONNECTION_URI || process.env.DATABASE_URL,
  databaseSsl: Boolean(process.env.SUPABASE_CONNECTION_URI) || process.env.DB_SSL === "true",
  databasePoolMax: Number(process.env.DB_POOL_MAX || 10),
  allowedOrigins,
};

if (!env.databaseUrl) {
  throw new Error("Set SUPABASE_CONNECTION_URI or DATABASE_URL");
}
