import { SignUpRepository } from "../repository/repository";
import { ResourceNotFoundError, BadError } from "../../../shared/error/error";


export class GetUserSignUpUseCase {
    constructor( private signRepository: SignUpRepository){}

    async execute(){

        const signUp = await  this.signRepository.getAll();

        if(!signUp){
            throw new ResourceNotFoundError("User not found")
        }

        return signUp
    }
}