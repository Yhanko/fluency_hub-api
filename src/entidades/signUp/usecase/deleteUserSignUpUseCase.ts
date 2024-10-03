import { SignUpRepository } from "../repository/repository";
import { ResourceNotFoundError, BadError } from "../../../shared/error/error";


export class DeleteSignUserUseCase {
    constructor( private signRepository: SignUpRepository){}

    async execute(id: number){

        const signUp = await  this.signRepository.findById(id);

        if(!signUp){
            throw new ResourceNotFoundError("User not found")
        }

        const deleted = await this.signRepository.del(id);

        return deleted
    }
}