import { CommentaryDataBase } from "../repository/implementation/commentaryDataBase";
import { DeleteCommentaryUseCase } from "../useCase/deleteCommentaryUseCase";

export function deleteCommentaryFactory(){
    const repository = new CommentaryDataBase();
    const useCase = new DeleteCommentaryUseCase(repository);

    return useCase; 
}