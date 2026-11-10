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

This starts PostgreSQL on port 5432 and the API on port 4000. The first database initialization creates the `inquiries` table. Check the API and database with `GET http://localhost:4000/api/health`.

To run only the API outside Docker, copy `backend/.env.example` to `backend/.env`, set `DATABASE_URL`, apply `backend/migrations/001_create_inquiries.sql` to that database, then run `npm install` and `npm run dev` from `backend`.

## Supabase PostgreSQL

In Supabase, open the SQL Editor and run `backend/migrations/001_create_inquiries.sql` (from the `Balaklives` directory). Set the API's `DATABASE_URL` to the project's PostgreSQL connection string. Use the direct or session-pooler connection for a long-running Node server, keep the password private, and set `DB_SSL=true`. Set `CLIENT_ORIGINS` to the deployed site's origin. Do not put the database connection string in the Vite frontend environment.

## Endpoint

`POST /api/inquiries` accepts `name`, `email`, and `message` (required), plus `organization`, `phone`, `package`, and `timing` (optional). It returns `201` with the new inquiry ID and creation time. `GET /api/health` checks database connectivity.
