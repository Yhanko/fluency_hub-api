import { SignUpDatabase } from "../repository/implementations/signUp-Database";
import { UserSignUpUseCase } from "../usecase/userSignUpUseCase";

export function userSignUpFactory(){
    const repository = new SignUpDatabase();
    const userSignUpUseCase = new UserSignUpUseCase(repository);

    return userSignUpUseCase; 
}