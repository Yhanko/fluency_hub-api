import { FastifyInstance } from"fastify";
import { getAllEmailsController } from "../entidades/news/controllers/getAllEmailsControllers";
import { registerEmailController } from "../entidades/news/controllers/registerEmailController";

export async function newsRoutes(app: FastifyInstance){
    app.post('/news', registerEmailController);
    app.get('/news', getAllEmailsController);
}