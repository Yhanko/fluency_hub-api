import { CommentaryDataBase } from "../repository/implementation/commentaryDataBase";
import { CreateCommentaryUseCase } from "../useCase/CreateCommentaryUseCase";

export function createCommentaryFactory(){
    const repository = new CommentaryDataBase();
    const useCase = new CreateCommentaryUseCase(repository);

    return useCase; 
}