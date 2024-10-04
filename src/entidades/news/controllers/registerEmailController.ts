import { FastifyRequest, FastifyReply } from "fastify";
import { registerEmailFactory } from "../factory/registerEmailFatory"; 
import { AllReadyExist, BadError } from "../../../shared/error/error";
import z from "zod";
export async function registerEmailController(request: FastifyRequest, reply: FastifyReply){
    try {
            const bodySchema = z.object({
                email: z.string({required_error: "email is require"}).email()
            });

            const { email } = bodySchema.parse(request.body);

        const register = registerEmailFactory();
        const registerEmail = await register.execute(email);

        reply.status(201).send({ message: registerEmail });

    } catch (err) {
        if(err instanceof AllReadyExist){
            return reply.status(409).send({ error: err.message });
        }

        throw err
    }
}