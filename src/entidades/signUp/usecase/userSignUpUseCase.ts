import { SignUpRepository } from "../repository/repository"; 
import { ResourceNotFoundError } from "../../../shared/error/error";
export class UserSignUpUseCase {
    constructor(
        private usersRepository: SignUpRepository
    ){}

    async execute(id: number) {
        const user = await this.usersRepository.findById(id);

        if(!user) {
            throw new ResourceNotFoundError("User not found");
        }

        return user
    }
}