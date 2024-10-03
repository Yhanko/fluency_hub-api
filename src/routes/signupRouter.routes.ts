import { FastifyInstance } from 'fastify';
import { signUpController } from "../entidades/signUp/controllers/signUpController";

export async function signUpRoutes(app: FastifyInstance) {
    app.post('/signup', {
        schema: {
            body: {
                type: 'object',
                required: ['fullName', 'email', 'phone', 'identityCard', 'course'],
                properties: {
                    fullName: { type: 'string', description: 'Full name of the user' },
                    email: { type: 'string', format: 'email', description: 'User email address' },
                    phone: { type: 'string', description: 'User phone number' },
                    identityCard: { type: 'string', description: 'User identity card number' },
                    course: {
                        type: 'string',
                        enum: ['ENGLISH', 'SPANISH', 'FRENCH'],
                        default: 'ENGLISH',
                        description: 'Language course selected by the user',
                    }
                },
            },
            response: {
                201: {
                    description: 'User successfully registered',
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                    },
                },
                409: {
                    description: 'User already exists',
                    type: 'object',
                    properties: {
                        error: { type: 'string' },
                    },
                },
            },
        },
        handler: signUpController,
    });
}
