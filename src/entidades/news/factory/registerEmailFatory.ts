import { NewsLattersDataBase } from "../repository/implementation/newsllaterdataBase";
import { RegisterEmailUseCase } from "../useCase/registerEmailUseCase";

export function registerEmailFactory(){
    const repository = new NewsLattersDataBase();
    const useCase = new RegisterEmailUseCase(repository);

    return useCase; 
}