import { FastifyRequest, FastifyReply } from "fastify";
import { createCommentaryFactory } from "../factory/createCommentaryFactorty"; 
import { BadError } from "../../../shared/error/error";
import z from "zod";

export async function createCommentaryController(request: FastifyRequest, reply: FastifyReply){
    try {
            const bodySchema = z.object({
                fullName: z.string({required_error: "full name is require"}),
                content: z.string({required_error: "Content or commentary is require"}),
                photo: z.string()
            });

            const { content, fullName, photo } = bodySchema.parse(request.body);

        const createCommentary = createCommentaryFactory();
        const commentaryCreated = await createCommentary.execute(
            content, fullName, photo 
        );

        reply.status(201).send({ message: commentaryCreated });

    } catch (err) {
        if(err instanceof BadError){
            return reply.status(500).send({ error: err.message });
        }

        throw err
    }
}