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
                        example: 'John Doe' 
                    },
                    content: { 
                        type: 'string', 
                        description: 'Content or commentary of the post', 
                        example: 'This is my first post!' 
                    },
                    photo: { 
                        type: 'string', 
                        description: 'Optional URL of a photo related to the post', 
                        example: 'https://example.com/photo.jpg' 
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
                            example: 'Post created successfully' 
                        },
                    },
                },
                400: {
                    description: 'Bad request, missing or invalid data',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                            example: 'Full name is required' 
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
                        example: 42 
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
                            example: 'Post deleted successfully' 
                        },
                    },
                },
                404: {
                    description: 'Post not found',
                    type: 'object',
                    properties: {
                        error: { 
                            type: 'string', 
                            example: 'Post with ID 42 not found' 
                        },
                    },
                },
            },
        },
        handler: deleteCommentaryController,
    });

    app.get('/posts', getAllCommentaryController);
}
