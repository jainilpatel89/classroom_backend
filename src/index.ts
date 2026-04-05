import AgentAPI from 'apminsight';
AgentAPI.config();

import express from 'express';
import cors from 'cors';
import subjectsRouter from './routes/subjects.js';
import securityMiddleware from './middleware/security.js';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';

const app = express(); 
const PORT = 3000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json());

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(securityMiddleware);

app.use('/api/subjects', subjectsRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});