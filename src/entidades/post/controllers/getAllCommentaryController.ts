import { FastifyRequest, FastifyReply } from "fastify";
import { getAllCommentaryFactory } from "../factory/getAllCommentaryFactory"; 
import { BadError } from "../../../shared/error/error";

export async function getAllCommentaryController(request: FastifyRequest, reply: FastifyReply) {
    try {

        const getCommentry = getAllCommentaryFactory();
        const allCommentary = await getCommentry.execute();

        if (!allCommentary) {
            return reply.status(404).send({ message: "Commentry not found" });
        }

        reply.status(200).send({ message: allCommentary });

    } catch (err) {
        if (err instanceof BadError) {
            return reply.status(500).send({ message: err.message });
        }

        throw err
    }
}