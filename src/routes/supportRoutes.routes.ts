import { FastifyInstance } from 'fastify';
import { deleteContactController } from "../entidades/support/controllers/deleteContactsController";
import { registerContactController } from "../entidades/support/controllers/registerContactController";
import { getAllContactController } from "../entidades/support/controllers/getAllContactController";

export async function supportRoutes(app: FastifyInstance) {
    app.post('/support', {
        schema: {
            summary: 'Register a new support contact',
            description: 'Registers a new contact request in the support system.',
            tags: ['Support'],
            body: {
                type: 'object',
                required: ['fullName', 'email', 'phone', 'message'],
                properties: {
                    fullName: { 
                        type: 'string', 
                        description: 'Full name of the contact person', 
                        example: 'Jane Doe' 
                    },
                    email: { 
                        type: 'string', 
                        format: 'email', 
                        description: 'Email address of the contact person', 
                        example: 'jane.doe@example.com' 
                    },
                    phone: { 
                        type: 'string', 
                        description: 'Phone number of the contact person', 
                        example: '+123456789' 
                    },
                    message: { 
                        type: 'string', 
                        description: 'Message or inquiry from the contact', 
                        example: 'I need help with my account settings.' 
                    }
                },
            },
            response: {
                201: {
                    description: 'Contact request successfully registered',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'Contact registered successfully' 
                        },
                    },
                },
                400: {
                    description: 'Bad request, missing or invalid data',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                            example: 'Invalid email format or missing required fields' 
                        },
                    },
                },
            },
        },
        handler: registerContactController,
    });

    app.delete('/support/:id', {
        schema: {
            summary: 'Delete a support contact by ID',
            description: 'Deletes a contact request from the support system using its unique ID.',
            tags: ['Support'],
            params: {
                type: 'object',
                properties: {
                    id: { 
                        type: 'number', 
                        description: 'The unique ID of the contact request to be deleted',
                        example: 42 
                    }
                },
                required: ['id']
            },
            response: {
                200: {
                    description: 'Contact request successfully deleted',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'Contact deleted successfully' 
                        },
                    },
                },
                404: {
                    description: 'Contact request not found',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                            example: 'Contact with ID 42 not found' 
                        },
                    },
                },
            },
        },
        handler: deleteContactController,
    });


    app.get('/support', getAllContactController);
}
