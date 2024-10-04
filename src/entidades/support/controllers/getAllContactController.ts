import { FastifyRequest, FastifyReply } from "fastify";
import { getContactFactory } from "../factory/getContactsFatory"; 
import { BadError } from "../../../shared/error/error";

export async function getAllContactController(request: FastifyRequest, reply: FastifyReply) {
    try {

        const getContacts = getContactFactory();
        const allContact = await getContacts.execute();

        if (!allContact) {
            return reply.status(404).send({ message: "Contacts not found" });
        }

        reply.status(200).send({ message: allContact });

    } catch (err) {
        if (err instanceof BadError) {
            return reply.status(500).send({ message: err.message });
        }

        throw err
    }
}