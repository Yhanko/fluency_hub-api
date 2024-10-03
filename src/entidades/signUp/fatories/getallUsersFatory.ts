import { SignUpDatabase } from "../repository/implementations/signUp-Database";
import { GetUserSignUpUseCase } from "../usecase/getAllusersUseCse";



export function getAllUsersfatory(){
    const repository = new SignUpDatabase();
    const signUpUseCase = new GetUserSignUpUseCase(repository);

    return signUpUseCase; 
}