import express from 'express';
import swaggerUi from 'swagger-ui-express';

import route from './routes';
import { swaggerDocument } from './docs';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(route);

app.listen(3333, () => {
  console.log('🚀 Server started: http://localhost:3333');
  console.log('Access http://localhost:3333/docs for api documentation!');
});
