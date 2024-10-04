import { FastifyRequest, FastifyReply} from "fastify";
import z from "zod";
import { BadError, ResourceNotFoundError } from "../../../shared/error/error";
import { deleteCommentaryFactory } from "../factory/deleteCommentaryFactory";

export async function deleteCommentaryController(request: FastifyRequest, reply: FastifyReply){
    try{
        const paramsSchema = z.object({
            id: z.coerce.number({required_error: "Commentary id is required"})
        });

        const { id } = paramsSchema.parse(request.params);

        const commentaryDeleted = deleteCommentaryFactory();
        await commentaryDeleted.execute(id);

    }catch(error){
        if(error instanceof ResourceNotFoundError){
            reply.status(404).send({message: error.message})
        }

        if(error instanceof BadError){
            reply.status(500).send({message: error.message})
        }
    }

    reply.status(200).send({message: "Commentary deleted sucessFully"});
}