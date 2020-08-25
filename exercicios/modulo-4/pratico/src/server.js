import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';

import { swaggerDocument } from './docs';
import routes from './routes';

const app = express();
app.use(express.json());

mongoose.connect(
  'mongodb+srv://<user>:<password>@cluster0.xiikz.mongodb.net/<dbname>?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started: http://localhost:3333');
  console.log('Access http://localhost:3333/docs for api documentation!');
});
