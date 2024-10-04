import { SupportRepository } from "../repository/supportRepository";
import { ResourceNotFoundError } from "../../../shared/error/error"

export class GetAllContactUseCase {
    constructor(private supportRepository: SupportRepository){}

    async execute(){
        const contact = await this.supportRepository.getAll();

        if(!contact){
            throw new ResourceNotFoundError("Contacts not found")
        }
        
        return contact;
    }
}