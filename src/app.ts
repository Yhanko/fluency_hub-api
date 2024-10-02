import express from 'express';
import routes from './routes'; 
import { env } from "./config/env";
import { swaggerUi, swaggerSpec } from './swagger'; 
import { ZodError } from 'zod';
import cors from 'cors';
import { Request, Response,  NextFunction } from "express";

export const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use((err: Error, request:Request, response:Response, next: NextFunction) => {
    if (err instanceof ZodError) {
        return response.status(400).send({ message: 'Validation error.', issues: err.format() });
    }

    if (env.NODE_ENV !== 'production') {
        console.error(err);
    } else {
        // Utilizar ferramenta de monitoramento para alertas em produção
    }
});



