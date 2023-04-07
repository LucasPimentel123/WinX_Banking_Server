import { Router } from 'express';
import { registerUserModule } from './module';

const routes = Router();

routes.post('/users', registerUserModule().execute);

export { routes };