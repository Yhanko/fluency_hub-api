import { NewsLattersDataBase } from "../repository/implementation/newsllaterdataBase";
import { GetAllEmailUseCase } from "../useCase/getAllEmailUseCase";

export function getEmailsFactory(){
    const repository = new NewsLattersDataBase();
    const useCase = new GetAllEmailUseCase(repository);

    return useCase; 
}