# 🎓 Classroom Admin Dashboard — Backend

REST API for the Classroom Admin Dashboard. Built with Node.js, Express, and Drizzle ORM on a serverless Neon PostgreSQL database. Features enterprise-grade authentication via Better Auth, security primitives via Arcjet, and media management via Cloudinary.

**Frontend Repository:** [github.com/jainilpatel89/classroom_frontend](https://github.com/jainilpatel89/classroom_frontend)  
**Live Frontend:** [classroom-frontend-gules.vercel.app](https://classroom-frontend-gules.vercel.app)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org) | JavaScript runtime environment |
| [Express.js](https://expressjs.com) | Minimal and flexible web application framework |
| [Drizzle ORM](https://orm.drizzle.team) | Lightweight TypeScript ORM for type-safe database queries |
| [Neon](https://neon.tech) | Serverless PostgreSQL — autoscaling, instant provisioning |
| [Better Auth](https://better-auth.com) | Authentication and authorization — email/password, social sign-on (Google, GitHub, Apple), and MFA |
| [Arcjet](https://arcjet.com) | Application security — rate limiting, bot protection, email validation, and sensitive data masking |
| [Cloudinary](https://cloudinary.com) | Image and video upload, storage, transformation, and delivery |
| [TypeScript](https://www.typescriptlang.org) | Static typing for improved reliability and developer experience |

---

## Dev Tools

| Tool | Purpose |
|---|---|
| [CodeRabbit](https://coderabbit.ai) | AI-powered automated code review on pull requests |
| [Site24x7](https://www.site24x7.com) | Real-time uptime monitoring and performance tracking |

---

## API Endpoints

### Dashboard
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/stats/overview` | Get overall system statistics |
| GET | `/api/stats/latest` | Get latest classes and teachers |
| GET | `/api/stats/charts` | Get aggregated data for charts |

### Subjects
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/subjects` | Get all subjects |
| GET | `/api/subjects/:id` | Get a subject by ID |
| POST | `/api/subjects` | Create a new subject |
| GET | `/api/subjects/:id/classes` | Get classes for a subject |
| GET | `/api/subjects/:id/users` | Get users for a subject |

### Departments
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/departments` | Get all departments |
| GET | `/api/departments/:id` | Get a department by ID |
| POST | `/api/departments` | Create a new department |
| GET | `/api/departments/:id/subjects` | Get subjects in a department |
| GET | `/api/departments/:id/classes` | Get classes in a department |
| GET | `/api/departments/:id/users` | Get users in a department |

### Faculty
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a user by ID |
| GET | `/api/users/:id/departments` | Get departments assoiciated with a user |
| GET | `/api/users/:id/subjects` | Get subjects associated with a user |

### Enrollments
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/enrollments` | Enroll a student in a class |
| POST | `/api/enrollments/join` | Join a class using an invite code |

### Classes
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/classes` | Get all classes |
| GET | `/api/classes/:id` | Get a class by ID |
| POST | `/api/classes` | Create a new class |
| GET | `/api/classes/:id/users` | Get users in a class |

> Note: Update (PUT) and Delete (DELETE) operations are not yet implemented.

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- A [Neon](https://neon.tech) account for the database
- A [Cloudinary](https://cloudinary.com) account for media management
- An [Arcjet](https://arcjet.com) account for security

### Installation

1. Clone the repository
```bash
git clone https://github.com/jainilpatel89/classroom_backend.git
cd classroom_backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory (use `.env.example` as reference)
```
# Database
DATABASE_URL=

# Frontend
FRONTEND_URL=

# Security (Arcjet)
ARCJET_KEY=
ARCJET_ENV=

# Authentication (Better Auth)
BETTER_AUTH_SECRET=
```

4. Push the database schema
```bash
npm run db:push
```

5. Start the server
```bash
npm start
```

The API will be running at `http://localhost:3000`

### Development Mode
```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file based on `.env.example`:

| Variable | Description |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `FRONTEND_URL` | URL of the frontend application |
| `ARCJET_KEY` | Arcjet API key for security features |
| `ARCJET_ENV` | Arcjet environment mode (`development` or `production`) |
| `BETTER_AUTH_SECRET` | Secret key for Better Auth session signing |

---

## Project Structure

```
├── src/
│   ├── config/         # Arcjet config for rate limiting and bot detection
│   ├── db/             # Drizzle ORM config and schema
│   ├── lib/            # Arcjet, Cloudinary, and Better Auth setup
│   ├── middleware/     # Role-based rate limiting with Arcjet
│   ├── routes/         # Express route handlers
│   └── index.ts        # Entry point
├── drizzle.config.ts   # Drizzle ORM configuration
└── package.json
```

---

## Deployment

Backend is deployed on **Railway**. To deploy your own instance:

1. Push your code to GitHub
2. Create a new project on [Railway](https://railway.app)
3. Connect your GitHub repository
4. Set all environment variables from `.env.example`
5. Deploy

---

## Related

- [Frontend Repository](https://github.com/jainilpatel89/classroom_frontend) — Refine + React + TypeScript admin dashboard deployed on Vercel