import { SupportDataBase } from "../repository/implementation/supportDatabae";
import { GetAllContactUseCase } from "../useCase/getAllContactUseCase";

export function getContactFactory(){
    const repository = new SupportDataBase();
    const useCase = new GetAllContactUseCase(repository);

    return useCase; 
}