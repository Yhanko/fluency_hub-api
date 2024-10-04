import { FastifyRequest, FastifyReply } from "fastify";
import { getEmailsFactory } from "../factory/getEmailsFatory"; 
import { BadError } from "../../../shared/error/error";

export async function getAllEmailsController(request: FastifyRequest, reply: FastifyReply) {
    try {

        const getEmails = getEmailsFactory();
        const allEmails = await getEmails.execute();

        if (!allEmails) {
            return reply.status(404).send({ message: "Emails not found" });
        }

        reply.status(200).send({ message: allEmails });

    } catch (err) {
        if (err instanceof BadError) {
            return reply.status(500).send({ message: err.message });
        }

        throw err
    }
}