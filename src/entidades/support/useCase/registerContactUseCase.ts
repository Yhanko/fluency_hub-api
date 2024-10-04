import { SupportRepository } from "../repository/supportRepository";


export class RegisterContactUseCase {
    constructor(private supportRepository: SupportRepository){}

    async execute(
        fullName: string,
        email: string,
        phone: string,
        message: string
    ){
        const contact = await this.supportRepository.register({fullName, email, phone, message});
        
        return contact;
    }
}