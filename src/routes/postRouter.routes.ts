import { FastifyInstance } from "fastify";
import { createCommentaryController } from "../entidades/post/controllers/createCommentaryController";
import { deleteCommentaryController } from "../entidades/post/controllers/deleCommentaryController";
import { getAllCommentaryController } from "../entidades/post/controllers/getAllCommentaryController";

export async function postRoutes(app: FastifyInstance) {
    
    app.post('/posts', {
        schema: {
            summary: 'Create a new post',
            description: 'Creates a new post with the provided details.',
            tags: ['Posts'],
            body: {
                type: 'object',
                required: ['fullName', 'content'],
                properties: {
                    fullName: { 
                        type: 'string', 
                        description: 'Full name of the person creating the post',  
                    },
                    content: { 
                        type: 'string', 
                        description: 'Content or commentary of the post', 
                    },
                    photo: { 
                        type: 'string', 
                        description: 'Optional URL of a photo related to the post', 
                    }
                },
            },
            response: {
                201: {
                    description: 'Post successfully created',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                        },
                    },
                },
                400: {
                    description: 'Bad request, missing or invalid data',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                        },
                    },
                },
            },
        },
        handler: createCommentaryController,
    });

    app.delete('/posts/:id', {
        schema: {
            summary: 'Delete a post by ID',
            description: 'Deletes a post from the system using its unique ID.',
            tags: ['Posts'],
            params: {
                type: 'object',
                properties: {
                    id: { 
                        type: 'number', 
                        description: 'The unique ID of the post to be deleted',
                    }
                },
                required: ['id']
            },
            response: {
                200: {
                    description: 'Post successfully deleted',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                        },
                    },
                },
                404: {
                    description: 'Post not found',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                        },
                    },
                },
            },
        },
        handler: deleteCommentaryController,
    });

    app.get('/posts', getAllCommentaryController);
}
