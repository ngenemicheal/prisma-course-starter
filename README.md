# Prisma Course Starter

A minimal Node.js + TypeScript starter project for learning Prisma with PostgreSQL. It includes a simple Express API and Prisma schema, migrations, and a seed script.

## Features
- Prisma schema with a `User` model ([`model User`](prisma-course-starter/prisma/schema.prisma))
- Example seed data (see [`seed()`](prisma-course-starter/prisma/seed.ts))
- Simple REST endpoints in [prisma-course-starter/index.ts](prisma-course-starter/index.ts) using:
  - [`prisma.user.findMany`](prisma-course-starter/index.ts) — GET /users
  - [`prisma.user.update`](prisma-course-starter/index.ts) — PUT /users
  - [`prisma.user.deleteMany`](prisma-course-starter/index.ts) — DELETE /users

## Prerequisites
- Node.js (14+)
- PostgreSQL (locally or remote)
- A DATABASE_URL environment variable pointing to your Postgres instance

Note: `.env` is ignored by git ([.gitignore](prisma-course-starter/.gitignore)).

## Quick start

1. Install dependencies
```bash
npm install
```

2. Configure database
- Set `DATABASE_URL` in your environment (or create a `.env` file).

3. Apply migrations
- Development:
```bash
npx prisma migrate dev
```
- Or in CI / production:
```bash
npx prisma migrate deploy
```

4. Generate Prisma Client (if needed)
```bash
npx prisma generate
```

5. Seed the database
```bash
npx prisma db seed
```
This runs the seed script defined in [prisma-course-starter/package.json](prisma-course-starter/package.json) and the function [`seed()`](prisma-course-starter/prisma/seed.ts).

6. Run the app (development)
```bash
npm run dev
```

## API Endpoints (examples)
- GET /users — returns users filtered by nationality (implemented via [`prisma.user.findMany`](prisma-course-starter/index.ts))
  ```bash
  curl http://localhost:4000/users
  ```
- PUT /users — updates age & marital status (see [`prisma.user.update`](prisma-course-starter/index.ts))
  ```bash
  curl -X PUT http://localhost:4000/users
  ```
- DELETE /users — deletes users older than 30 (see [`prisma.user.deleteMany`](prisma-course-starter/index.ts))
  ```bash
  curl -X DELETE http://localhost:4000/users
  ```
# Prisma Course Starter

A minimal Node.js + TypeScript starter project for learning Prisma with PostgreSQL. It includes a simple Express API and Prisma schema, migrations, and a seed script.

## Features
- Prisma schema with a `User` model ([`model User`](prisma-course-starter/prisma/schema.prisma))
- Example seed data (see [`seed()`](prisma-course-starter/prisma/seed.ts))
- Simple REST endpoints in [prisma-course-starter/index.ts](prisma-course-starter/index.ts) using:
  - [`prisma.user.findMany`](prisma-course-starter/index.ts) — GET /users
  - [`prisma.user.update`](prisma-course-starter/index.ts) — PUT /users
  - [`prisma.user.deleteMany`](prisma-course-starter/index.ts) — DELETE /users

## Prerequisites
- Node.js (14+)
- PostgreSQL (locally or remote)
- A DATABASE_URL environment variable pointing to your Postgres instance

Note: `.env` is ignored by git ([.gitignore](prisma-course-starter/.gitignore)).

## Quick start

1. Install dependencies
```bash
npm install
```

2. Configure database
- Set `DATABASE_URL` in your environment (or create a `.env` file).

3. Apply migrations
- Development:
```bash
npx prisma migrate dev
```
- Or in CI / production:
```bash
npx prisma migrate deploy
```

4. Generate Prisma Client (if needed)
```bash
npx prisma generate
```

5. Seed the database
```bash
npx prisma db seed
```
This runs the seed script defined in [prisma-course-starter/package.json](prisma-course-starter/package.json) and the function [`seed()`](prisma-course-starter/prisma/seed.ts).

6. Run the app (development)
```bash
npm run dev
```

## API Endpoints (examples)
- GET /users — returns users filtered by nationality (implemented via [`prisma.user.findMany`](prisma-course-starter/index.ts))
  ```bash
  curl http://localhost:4000/users
  ```
- PUT /users — updates Pedro's age & marital status (see [`prisma.user.update`](prisma-course-starter/index.ts))
  ```bash
  curl -X PUT http://localhost:4000/users
  ```
- DELETE /users — deletes users older than 30 (see [`prisma.user.deleteMany`](prisma-course-starter/index.ts))
  ```bash
  curl -X DELETE http://localhost:4000/users
  ```

## Project files
- [prisma-course-starter/index.ts](prisma-course-starter/index.ts) — Express app and Prisma usage
- [prisma-course-starter/prisma/schema.prisma](prisma-course-starter/prisma/schema.prisma) — data model (`User`)
- [prisma-course-starter/prisma/seed.ts](prisma-course-starter/prisma/seed.ts) — seed data
- [prisma-course-starter/prisma/migrations](prisma-course-starter/prisma/migrations) — recorded migrations
- [prisma-course-starter/package.json](prisma-course-starter/package.json) — scripts & prisma seed config
- [prisma-course-starter/tsconfig.json](prisma-course-starter/tsconfig.json) — TypeScript config
- [prisma-course-starter/.gitignore](prisma-course-starter/.gitignore)

## Tips
- Inspect the SQL migrations in [prisma-course-starter/prisma/migrations](prisma-course-starter/prisma/migrations) to learn how schema changes map to SQL.
- Use Prisma Studio to explore data:
```bash
npx prisma studio
```

## Troubleshooting
- If migrations fail due to existing data when adding required columns, either:
  - Make new columns nullable or provide defaults, or
  - Clean DB and re-run migrations for learning purposes.

License: MIT
## Project files
- [prisma-course-starter/index.ts](prisma-course-starter/index.ts) — Express app and Prisma usage
- [prisma-course-starter/prisma/schema.prisma](prisma-course-starter/prisma/schema.prisma) — data model (`User`)
- [prisma-course-starter/prisma/seed.ts](prisma-course-starter/prisma/seed.ts) — seed data
- [prisma-course-starter/prisma/migrations](prisma-course-starter/prisma/migrations) — recorded migrations
- [prisma-course-starter/package.json](prisma-course-starter/package.json) — scripts & prisma seed config
- [prisma-course-starter/tsconfig.json](prisma-course-starter/tsconfig.json) — TypeScript config
- [prisma-course-starter/.gitignore](prisma-course-starter/.gitignore)

## Tips
- Inspect the SQL migrations in [prisma-course-starter/prisma/migrations](prisma-course-starter/prisma/migrations) to learn how schema changes map to SQL.
- Use Prisma Studio to explore data:
```bash
npx prisma studio
```

## Troubleshooting
- If migrations fail due to existing data when adding required columns, either:
  - Make new columns nullable or provide defaults, or
  - Clean DB and re-run migrations for learning purposes.

License: MIT