import { CommentaryDataBase } from "../repository/implementation/commentaryDataBase";
import { GetAllCommentaryUseCase } from "../useCase/getAllCommentaryUseCase";

export function getAllCommentaryFactory(){
    const repository = new CommentaryDataBase();
    const useCase = new GetAllCommentaryUseCase(repository);

    return useCase; 
}