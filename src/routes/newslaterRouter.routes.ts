import { FastifyInstance } from"fastify";
import { getAllEmailsController } from "../entidades/news/controllers/getAllEmailsControllers";
import { registerEmailController } from "../entidades/news/controllers/registerEmailController";

export async function newsRoutes(app: FastifyInstance) {
    
    app.post('/news', {
        schema: {
            summary: 'Register an email for news updates',
            description: 'Allows users to register their email to receive news updates.',
            tags: ['News'],
            body: {
                type: 'object',
                required: ['email'],
                properties: {
                    email: { 
                        type: 'string', 
                        format: 'email', 
                        description: 'Email address of the user for news updates', 
                        example: 'user@example.com' 
                    }
                },
            },
            response: {
                201: {
                    description: 'Email successfully registered for news updates',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'Email registered successfully for news updates' 
                        },
                    },
                },
                400: {
                    description: 'Bad request, missing or invalid email',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                            example: 'Invalid email format' 
                        },
                    },
                },
                409: {
                    description: 'Conflict, email already registered',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                            example: 'Email is already registered' 
                        },
                    },
                },
            },
        },
        handler: registerEmailController,
    });

    app.get('/news', getAllEmailsController);
}