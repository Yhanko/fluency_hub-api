import { AllReadyExist } from "../../../shared/error/error";
import { SignUpRepository } from "../repository/repository";
import { RequestUser, Response} from "../../../interfaces/IsignUp";

export class SignUpUseCase {
    constructor( private signUpRepository: SignUpRepository){}
    
    async execute({ fullName, email, phone,  course, identityCard }: RequestUser): Promise<Response>{
        const userEmail = await this.signUpRepository.findEmail(email);
        
        if(userEmail){
            throw new AllReadyExist("Email já cadastrado");
        }

        const userPhone = await this.signUpRepository.findPhone(phone);

        if(userPhone){
            throw new AllReadyExist("Número de telefone já cadastrado");
        }

        const user = await this.signUpRepository.signUp({
            fullName, email, phone,  course, identityCard
        });

        return { user }
    }
}