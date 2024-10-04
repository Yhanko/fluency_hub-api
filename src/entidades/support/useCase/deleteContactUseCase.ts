import { SupportRepository } from "../repository/supportRepository";

export class DeleteContactUseCase {
    constructor(private supportRepository: SupportRepository){}

    async execute(id: number){
        const contact = await this.supportRepository.del(id);
        
        return contact;
    }
}