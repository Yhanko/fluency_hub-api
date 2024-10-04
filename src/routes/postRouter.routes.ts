import { FastifyInstance } from "fastify";
import { createCommentaryController } from "../entidades/post/controllers/createCommentaryController";
import { deleteCommentaryController } from "../entidades/post/controllers/deleCommentaryController";
import { getAllCommentaryController } from "../entidades/post/controllers/getAllCommentaryController";

export async function postRouter(app:FastifyInstance) {
    app.post('/commentary', createCommentaryController),
    app.get('/commentary', getAllCommentaryController);
    app.delete('/commentary/:id', deleteCommentaryController);
}