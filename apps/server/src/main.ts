import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext } from '@api/server-lib';
import cors from 'cors';
import express from 'express';
import * as path from 'path';

const app = express();

// Check this for AWS lambda integration:
// https://trpc.io/docs/server/adapters/aws-lambda
// also, more about these trpc adapters:
// https://trpc.io/docs/server/adapters/standalone


app.use(
  cors({
    origin: [
      'http://127.0.0.1:4201',
      'http://localhost:4201',
    ],
    credentials: false,
  }),
);

app.use((req, _res, next) => {
  // middleware, logger
  console.log('⬅️ ', req.method, req.path, req.body ?? req.query);

  next();
});

app.use(
  '/api',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to app-server!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
