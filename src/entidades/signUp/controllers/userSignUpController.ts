import { FastifyRequest, FastifyReply} from "fastify";
import { userSignUpProfileFactory } from "../fatories/signUpfileFatory"; 

export async function userSignUpController(request: FastifyRequest, reply: FastifyReply) {
    try {
        
    } catch (err) {

        return reply.status(500).send({ message: "Ocorreu um erro ao buscar o perfil do usuário." });
    }
}
