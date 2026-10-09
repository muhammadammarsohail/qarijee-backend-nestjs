# Qarijee Backend

Qarijee Backend is a NestJS and TypeScript prototype for an online Quran education platform. It models the workflows needed to connect students with teachers, organize courses and classrooms, and schedule assessments.

## What it demonstrates

- Modular NestJS application design
- Student, teacher, and administrator roles
- Signup and login flows for each role
- Course and classroom management
- Student enrollment and teacher availability
- Assessment scheduling and reporting
- DTO validation with `class-validator`
- A PostgreSQL/TypeORM configuration for future persistence

## Technology stack

- TypeScript
- NestJS 8
- PostgreSQL
- TypeORM
- Passport
- bcrypt
- Jest

## Project structure

```text
src/
├── admin/        Administrator module
├── assessment/   Assessment scheduling and reporting
├── auth/         Role-specific signup and login
├── classroom/    Enrollment and classroom workflows
├── course/       Course catalog management
├── dto/          Request and domain validation objects
├── student/      Student management
└── teacher/      Teacher profiles and availability
```

## Local setup

Requirements:

- Node.js 16 or later
- npm

Install the dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Replace the example `SALT` value with a long random value, then start the development server:

```bash
npm run start:dev
```

The API listens on `http://localhost:5000`.

## API areas

| Area | Base route | Example capabilities |
| --- | --- | --- |
| Authentication | `/auth` | Role-specific signup and login |
| Students | `/student` | List, retrieve, create, update, and delete students |
| Teachers | `/teacher` | Profiles, hiring, availability, and top teachers |
| Courses | `/course` | Course catalog CRUD operations |
| Classrooms | `/classroom` | Enrollment and teacher/student classroom views |
| Assessments | `/assessment` | Schedule assessments and retrieve reports |

## Validation

```bash
npm run build
npm test
```

## Current status

This repository is a portfolio prototype, not a production service. It currently uses an in-memory data store so it can demonstrate domain workflows without infrastructure. A TypeORM configuration is included, but database initialization is disabled in `src/app.module.ts`.

Before production use, the project would need persistent storage, database migrations, standard JWT authentication, authorization guards, automated endpoint tests, structured error handling, and secrets supplied through a managed environment.

## Author

[Ammar Sohail](https://github.com/muhammadammarsohail)
