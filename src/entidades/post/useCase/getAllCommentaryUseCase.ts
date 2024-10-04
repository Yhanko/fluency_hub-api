import { ResourceNotFoundError } from "../../../shared/error/error";
import { CommentaryRepository } from "../repository/commentaryRepository";


export class GetAllCommentaryUseCase {
    constructor(private commentaryRepository: CommentaryRepository){}

    async execute(){

        const post = await this.commentaryRepository.getAll();

        if(!post){
            throw new ResourceNotFoundError("Posts not found");
        }

        return post
    }
}