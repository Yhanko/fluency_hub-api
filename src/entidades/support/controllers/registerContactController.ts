import { FastifyRequest, FastifyReply} from "fastify";
import z from "zod";
import { registerContactFactory } from "../factory/registerContactFatory";
import { AllReadyExist, BadError } from "../../../shared/error/error";

 export async function registerContactController(request: FastifyRequest, reply: FastifyReply){

        const bodySchema = z.object({
            fullName: z.string({required_error: "Full name is require"}),
            email: z.string({required_error: "email is require"}).email(),
            phone: z.string({required_error: "phone number is require"}),
            message: z.string({required_error: "message is require"})
    
        });
    
        const { fullName, email, phone, message } = bodySchema.parse(request.body);
    
        try {
    
            const registerContact = registerContactFactory();
            await registerContact.execute( 
                fullName, email, phone,  message
            );
        
    
        } catch (error) {
            if(error instanceof AllReadyExist){
                return reply.status(409).send({ error: error.message });
            }

            if(error instanceof BadError){
                reply.status(500).send({error: error.message})
            }
    
            throw error
        }
    
        reply.status(201).send({ message: "Sended contact successfully" });
}

