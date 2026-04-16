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
| GET | `/api/dashboard` | Returns overview stats (total users, students, teachers, admins) |

### Subjects
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/subjects` | Get all subjects |
| GET | `/api/subjects/:id` | Get a subject by ID |
| POST | `/api/subjects` | Create a new subject |
| PUT | `/api/subjects/:id` | Update a subject |
| DELETE | `/api/subjects/:id` | Delete a subject |

### Departments
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/departments` | Get all departments |
| GET | `/api/departments/:id` | Get a department by ID |
| POST | `/api/departments` | Create a new department |
| PUT | `/api/departments/:id` | Update a department |
| DELETE | `/api/departments/:id` | Delete a department |

### Enrollments
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/enrollments` | Get all enrollments |
| GET | `/api/enrollments/:id` | Get enrollment by ID |
| POST | `/api/enrollments` | Create a new enrollment |

### Classes
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/classes` | Get all classes |
| GET | `/api/classes/:id` | Get a class by ID |
| POST | `/api/classes` | Create a new class |
| PUT | `/api/classes/:id` | Update a class |
| DELETE | `/api/classes/:id` | Delete a class |

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
# Server
PORT=5000

# Database (Neon)
DATABASE_URL=

# Authentication (Better Auth)
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

# Security (Arcjet)
ARCJET_KEY=

# Media (Cloudinary)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
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
| `PORT` | Port the server runs on (default: 3000) |
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Secret key for Better Auth session signing |
| `BETTER_AUTH_URL` | Base URL of the backend (for auth callbacks) |
| `ARCJET_KEY` | Arcjet API key for security features |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

---

## Project Structure

```
├── src/
│   ├── routes/         # Express route handlers
│   │   ├── students.ts
│   │   ├── teachers.ts
│   │   ├── classes.ts
│   │   ├── subjects.ts
│   │   └── departments.ts
│   ├── controllers/    # Business logic
│   ├── db/             # Drizzle ORM config and schema
│   ├── lib/            # Arcjet, Cloudinary, and Better Auth setup
│   └── index.ts        # Entry point
├── .env.example        # Example environment variables (safe to commit)
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