import { SignUpDatabase } from "../repository/implementations/signUp-Database";
import { DeleteSignUserUseCase } from "../usecase/deleteUserSignUpUseCase";
export function deleteSignUpUserFactory(){
    const repository = new SignUpDatabase();
    const userSignUpUseCase = new DeleteSignUserUseCase(repository);

    return userSignUpUseCase; 
}