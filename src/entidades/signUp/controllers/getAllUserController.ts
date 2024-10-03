import { FastifyRequest, FastifyReply } from "fastify";
import { getAllUsersfatory } from "../fatories/getallUsersFatory"; 
import { BadError } from "../../../shared/error/error";

export async function getAllUserUController(request: FastifyRequest, reply: FastifyReply) {
    try {

        const getUsers = getAllUsersfatory();
        const allUser = await getUsers.execute();

        if (!allUser) {
            return reply.status(404).send({ message: "Users not found" });
        }

        reply.status(200).send({ message: allUser });

    } catch (err) {
        if (err instanceof BadError) {
            return reply.status(500).send({ message: err.message });
        }

        throw err
    }
}