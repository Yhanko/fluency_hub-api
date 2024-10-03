import { SignUpDatabase } from "../repository/implementations/signUp-Database";
import { SignUpUseCase } from "../usecase/signUpUseCase";



export function signUpfatory(){
    const repository = new SignUpDatabase();
    const signUpUseCase = new SignUpUseCase(repository);

    return signUpUseCase; 
}