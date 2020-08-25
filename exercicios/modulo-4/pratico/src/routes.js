import { Router } from 'express';

import AccountController from './controllers/accounts';

const routes = Router();

routes.post('/deposit', AccountController.deposit);
routes.post('/withdraw', AccountController.withdraw);
routes.delete('/remove', AccountController.delete);
routes.get('/balance', AccountController.getBalance);
routes.post('/transfer', AccountController.transfer);
routes.get('/avg', AccountController.avgAgency);
routes.get('/lowest', AccountController.lowestBalances);
routes.get('/top', AccountController.topBalances);
routes.get('/transferTop', AccountController.transferTopBalances);

export default routes;
