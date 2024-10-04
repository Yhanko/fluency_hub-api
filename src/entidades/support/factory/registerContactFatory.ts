import { SupportDataBase } from "../repository/implementation/supportDatabae";
import { RegisterContactUseCase } from "../useCase/registerContactUseCase";

export function registerContactFactory(){
    const repository = new SupportDataBase();
    const useCase = new RegisterContactUseCase(repository);

    return useCase; 
}