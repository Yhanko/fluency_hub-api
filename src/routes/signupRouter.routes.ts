import { FastifyInstance } from 'fastify';
import { signUpController } from "../entidades/signUp/controllers/signUpController";
import { deleteUserController } from "../entidades/signUp/controllers/deleteSignUpUserController";
import { userSignUpController } from "../entidades/signUp/controllers/userSignUpController";
import { getAllUserUController } from "../entidades/signUp/controllers/getAllUserController";

export async function signUpRoutes(app: FastifyInstance) {
    
    app.post('/signup', {
        schema: {
            summary: 'Create a new user registration',
            description: 'Registers a new user for a specific language course.',
            tags: ['User Registration'],
            body: {
                type: 'object',
                required: ['fullName', 'email', 'phone', 'identityCard', 'course'],
                properties: {
                    fullName: { 
                        type: 'string', 
                        description: 'Full name of the user', 
                        example: 'John Doe' 
                    },
                    email: { 
                        type: 'string', 
                        format: 'email', 
                        description: 'User email address', 
                        example: 'john.doe@example.com' 
                    },
                    phone: { 
                        type: 'string', 
                        description: 'User phone number', 
                        example: '+123456789' 
                    },
                    identityCard: { 
                        type: 'string', 
                        description: 'User identity card number', 
                        example: '1234567890' 
                    },
                    course: {
                        type: 'string',
                        enum: ['ENGLISH', 'SPANISH', 'FRENCH'],
                        default: 'ENGLISH',
                        description: 'Language course selected by the user',
                        example: 'SPANISH'
                    }
                },
            },
            response: {
                201: {
                    description: 'User successfully registered',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'User registered successfully' 
                        },
                    },
                },
                409: {
                    description: 'User already exists',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                            example: 'User with this email already exists' 
                        },
                    },
                },
            },
        },
        handler: signUpController,
    });

    app.delete('/signup/:id', {
        schema: {
            summary: 'Delete a user by ID',
            description: 'Deletes a user from the database using their unique ID.',
            tags: ['User Management'],
            params: {
                type: 'object',
                properties: {
                    id: { 
                        type: 'number', 
                        description: 'The unique ID of the user to be deleted',
                        example: 1 
                    }
                },
                required: ['id'] 
            },
            response: {
                200: {
                    description: 'User successfully deleted',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'User deleted successfully' 
                        },
                    },
                },
                404: {
                    description: 'User not found',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                            example: 'User with ID 1 not found' 
                        },
                    },
                },
            },
        },
        handler: deleteUserController
    });

    app.get('/signup/:id', {
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { 
                        type: 'number', 
                        description: 'The ID of the user to retrieve',
                        example: 1 
                    },
                },
            },
            response: {
                200: {
                    description: 'User found successfully',
                    type: 'object',
                    properties: {
                        message: {
                            type: 'object',
                            properties: {
                                id: { 
                                    type: 'number', 
                                    description: 'User ID',
                                    example: 1 
                                },
                                fullName: { 
                                    type: 'string', 
                                    description: 'Full name of the user',
                                    example: 'John Doe' 
                                },
                                email: { 
                                    type: 'string', 
                                    format: 'email', 
                                    description: 'User email address',
                                    example: 'john.doe@example.com' 
                                },
                                phone: { 
                                    type: 'string', 
                                    description: 'User phone number',
                                    example: '+123456789' 
                                },
                                identityCard: { 
                                    type: 'string', 
                                    description: 'User identity card number',
                                    example: '1234567890' 
                                },
                                course: { 
                                    type: 'string', 
                                    description: 'Language course selected by the user',
                                    example: 'ENGLISH' 
                                },
                            },
                        },
                    },
                },
            },
        },
        handler: userSignUpController,
    });

    app.get('/signup', getAllUserUController)
}
