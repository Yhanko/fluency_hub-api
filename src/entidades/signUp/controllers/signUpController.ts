import { FastifyRequest, FastifyReply} from "fastify";
import z from "zod";
import { signUpfatory } from "../fatories/userSignUpfatory";
import { AllReadyExist } from "../../../shared/error/error";

 export async function signUpController(request: FastifyRequest, reply: FastifyReply){

        const bodySchema = z.object({
            fullName: z.string({required_error: "Full name is require"}),
            email: z.string({required_error: "Email is require"}).email().min(6),
            phone: z.string({required_error: "phone number is require"}),
            identityCard: z.string({required_error: "identity card is require"}),
            course: z.enum(["ENGLISH", "SPANISH", "FRENCH"]).default("ENGLISH")
    
        });
    
        const { fullName, email, phone,  course, identityCard } = bodySchema.parse(request.body);
    
        try {
    
            const signUpUsecase = signUpfatory();
            await signUpUsecase.execute({ 
                fullName, email, phone,  course, identityCard 
            });
        
    
        } catch (error) {
            if(error instanceof AllReadyExist){
                return reply.status(409).send({ error: error.message });
            }
    
            throw error
        }
    
        reply.status(201).send({ message: "User sign up successfully" });
}

