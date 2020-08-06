import { Router } from 'express';

import GradesController from './GradesController';

const route = Router();

route.post('/grades', GradesController.store);
route.put('/grades/:id', GradesController.save);
route.delete('/grades/:id', GradesController.remove);
route.get('/grades/:id', GradesController.findById);
route.get('/total-grades', GradesController.totalGrades);
route.get('/avg-grades', GradesController.avgGrades);
route.get('/best-grades', GradesController.bestGrades);

export default route;
