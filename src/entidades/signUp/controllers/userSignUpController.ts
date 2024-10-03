import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { userSignUpFactory } from "../fatories/userSignUpfileFatory"; 
import { BadError, ResourceNotFoundError } from "../../../shared/error/error";

export async function userSignUpController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const paramsSchema = z.object({
            id: z.coerce.number()
        });

        const { id } = paramsSchema.parse(request.params);

        const getUser = userSignUpFactory();
        const user = await getUser.execute(id);

        if (!user) {
            return reply.status(404).send({ message: "User not found" });
        }

        reply.status(200).send({ message: user });

    } catch (err) {
        if (err instanceof BadError) {
            return reply.status(500).send({ message: err.message });
        }

        throw err
    }
}
