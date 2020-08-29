import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';

import { swaggerDocument } from './docs';
import routes from './routes';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started: http://localhost:3333');
  console.log('Access http://localhost:3333/docs for api documentation!');
});
