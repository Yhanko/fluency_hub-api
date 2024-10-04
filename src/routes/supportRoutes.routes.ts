import { FastifyInstance } from"fastify";
import { deleteContactController } from "../entidades/support/controllers/deleteContactsController";
import { registerContactController } from "../entidades/support/controllers/registerContactController";
import { getAllContactController } from "../entidades/support/controllers/getAllContactController";

export async function supportRoutes(app: FastifyInstance){
    app.delete('/support/:id', deleteContactController);
    app.post('/support', registerContactController);
    app.get('/support', getAllContactController);
}