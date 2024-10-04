import { FastifyRequest, FastifyReply} from "fastify";
import z from "zod";
import { BadError, ResourceNotFoundError } from "../../../shared/error/error";
import { deleteContactFactory } from "../factory/deleteContactFatory";

export async function deleteContactController(request: FastifyRequest, reply: FastifyReply){
    try{
        const paramsSchema = z.object({
            id: z.coerce.number({required_error: "Contact id is required"})
        });

        const { id } = paramsSchema.parse(request.params);

        const deleteContact = deleteContactFactory();
        await deleteContact.execute(id);

    }catch(error){
        if(error instanceof ResourceNotFoundError){
            reply.status(404).send({message: error.message})
        }

        if(error instanceof BadError){
            reply.status(500).send({message: error.message})
        }
    }

    reply.status(200).send({message: "Contact deleted sucessFully"});
}