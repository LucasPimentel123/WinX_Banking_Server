import { Router } from 'express';
import { loginUserModule, registerUserModule } from './module';
import { openFinanceModule } from './module/OpenFinanceModule';

const routes = Router();

routes.post('/users', registerUserModule().execute);
routes.post('/login', loginUserModule().execute);
routes.get('/open-finance', openFinanceModule().execute);

export { routes };