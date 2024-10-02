import { Router } from 'express';
import supportRoutes from './supportRoutes.routes'; 
import signUpRoutes from './signupRouter.routes';

const routes = Router();

routes.use('/support', supportRoutes); 
routes.use('/signup', signUpRoutes);  

export default routes;