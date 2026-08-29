# NestJS + GraphQL portfolio

This project is a read-only GraphQL backend build with NestJS which serves my professional personal information such as experience, projects, etc. It currently enforces a single profile database entry by restricting the profile id to a single value, but may be trivially extended to support multiple profiles.

## Project structure

The project consists of multiple NestJS modules (including the root module), one for every model, with only `Profile` having a dedicated resolver, and also a module wrapping Prisma Client. The `prisma` directory contains migrations, schema definitions and a seeding script to initialize the database with my data.

## Running locally

After installing npm dependencies (`npm install`) and generating the Prisma Client (`npx prisma generate && npx prisma db seed`) the project can be started with an npm script:
```
npm run start
npm run start:dev # watch mode
```

## Environment variables

You can set `NO_WRITE` to make the app build GraphQL schema in-memory. This is useful when deploying to platforms with read-only file systems.