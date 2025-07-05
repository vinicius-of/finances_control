import express, { urlencoded } from 'express';
import '@dotenvx/dotenvx/config';
import { VenturesRouter } from '@controllers/index';
import morgan from 'morgan';
import { ErrorHandler } from '@middlewares/ErrorHandler';
import NotFoundError from '@errors/NotFoundError';
//@ts-expect-error CORS does not need types for this config
import cors from 'cors';
import MongoManager from './src/configs/mongoose';

const app = express()
  // // Middlewares
  .use(morgan('dev'))
  .use(urlencoded({ extended: true }))
  .use(express.json())
  .use(cors());

new MongoManager().init('mongodb://127.0.0.1:27017/test');

// Ventures
app.use(VenturesRouter.path, VenturesRouter.router);

// Health Check
app.get('/health-check', (_, res) => {
  res.json(true);
});

// // 404 Handler
app.use(() => {
  throw new NotFoundError();
});

// // Error Handlers
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Listening to ${process.env.PORT}`);
});
