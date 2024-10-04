import { NewsRepository } from "../repository/newsRepository";
import { ResourceNotFoundError } from "../../../shared/error/error"


export class GetAllEmailUseCase {
    constructor(private newsRepository: NewsRepository){}

    async execute(){
        const allEmail = await this.newsRepository.get();
        
        if(!allEmail){
            throw new ResourceNotFoundError("Emails not found")
        }

        return allEmail;
    }
}