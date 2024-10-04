import { CommentaryRepository } from "../repository/commentaryRepository";


export class CreateCommentaryUseCase{
    constructor(private commentaryRepository: CommentaryRepository){}

    async execute(
        fullName: string,
        content: string,
        photo: string
    ){
        const post = await this.commentaryRepository.create({
            fullName,
            content,
            photo
        });

        return post
    }
}