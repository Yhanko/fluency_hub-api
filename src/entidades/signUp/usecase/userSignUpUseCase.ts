import { SignUpRepository } from "../repository/repository"; 
import { ResourceNotFoundError } from "../../../shared/error/error";
import { Request, Response} from "../../../interfaces/IsignUp";

export class UserSignUpUseCase {
    constructor(
        private usersRepository: SignUpRepository
    ){}

    async execute({ userId }: Request): Promise<Response> {
        const user = await this.usersRepository.findById(userId);

        if(!user) {
            throw new ResourceNotFoundError();
        }

        return {
            user
        }
    }
}