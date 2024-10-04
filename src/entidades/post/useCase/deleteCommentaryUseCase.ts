import { ResourceNotFoundError } from "../../../shared/error/error";
import { CommentaryRepository } from "../repository/commentaryRepository";


export class DeleteCommentaryUseCase {
    constructor( private commentaryRepository: CommentaryRepository){}

    async execute(id: number){
        const findPost  = await this.commentaryRepository.findById(id);

        if(!findPost){
            throw new ResourceNotFoundError("Post not found");
        }
        
        const post = await this.commentaryRepository.del(id);

        return post
    }
}