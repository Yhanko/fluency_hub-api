import { SupportDataBase } from "../repository/implementation/supportDatabae";
import { DeleteContactUseCase } from "../useCase/deleteContactUseCase";

export function deleteContactFactory(){
    const repository = new SupportDataBase();
    const useCase = new DeleteContactUseCase(repository);

    return useCase; 
}