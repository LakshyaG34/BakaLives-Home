# Bakalives API

Express API for the Bakalives site. PostgreSQL access uses `DATABASE_URL`, so local PostgreSQL and Supabase use the same API code.

## Project layout

```text
src/
  app.js                 Express middleware and route mounting
  server.js              HTTP startup and graceful shutdown
  config/env.js          Environment loading and configuration
  db/pool.js             PostgreSQL connection pool
  routes/                URL-to-controller mapping
  controllers/           HTTP request and response handling
  services/              Database operations and application logic
  validators/            Request input validation
  middleware/            Shared Express middleware
migrations/              PostgreSQL schema changes
```

For an inquiry, the route calls the controller, the validator checks and normalizes the form data, and the service inserts it into PostgreSQL.

## Run with local PostgreSQL

From the `Balaklives` directory:

```sh
docker compose up --build
```

This starts PostgreSQL on port 5432 and the API on port 4000. Before the API starts accepting requests, it applies any pending SQL migrations. Check the API and database with `GET http://localhost:4000/api/health`.

To run the API outside Docker, copy `backend/.env.example` to `backend/.env`, set `DATABASE_URL` or `SUPABASE_CONNECTION_URI`, then run `npm install` and `npm run dev` from `backend`. The API applies pending migrations at startup. You can also run `npm run migrate` to apply migrations without starting the HTTP server.

## Supabase PostgreSQL

Put the PostgreSQL connection URI in `SUPABASE_CONNECTION_URI` in `backend/.env`. Supabase connections enable SSL automatically. On API startup, pending SQL files in `backend/migrations/` are applied in filename order and recorded with checksums in `public.schema_migrations`; each runs once in a transaction. Add a new numbered migration for each schema change and do not edit a migration after it has been applied. Use the direct or session-pooler connection for a long-running Node server, keep the URI private, and set `CLIENT_ORIGINS` to the deployed site's origin. Do not put the database connection string in the Vite frontend environment. `SUPABASE_CONNECTION_URI` takes precedence over `DATABASE_URL`. The API listens on `API_PORT` (4000 by default); `PORT` is not used so PostgreSQL's port setting cannot accidentally change the API port.

## Endpoint

`POST /api/inquiries` accepts `name`, `email`, and `message` (required), plus `organization`, `phone`, `package`, and `timing` (optional). It returns `201` with the new inquiry ID and creation time. `GET /api/health` checks database connectivity.
