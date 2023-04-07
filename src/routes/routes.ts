import { Router } from 'express';
import { loginUserModule, registerUserModule } from './module';

const routes = Router();

routes.post('/users', registerUserModule().execute);
routes.post('/login', loginUserModule().execute);
routes.get('/open-finance', loginUserModule().execute);

export { routes };