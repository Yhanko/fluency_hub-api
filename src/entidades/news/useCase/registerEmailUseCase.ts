import { NewsRepository } from "../repository/newsRepository";
import { AllReadyExist } from "../../../shared/error/error"

export class RegisterEmailUseCase {
    constructor(private newsRepository: NewsRepository){}

    async execute(email: string){
        const user = await this.newsRepository.findEmail(email);

        if(user){
            throw new AllReadyExist("Email allready exists")
        }

        const userEmail = await this.newsRepository.register(email);
        
        return userEmail;
    }
}