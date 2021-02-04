import express from 'express';
import * as dotenv from 'dotenv';
import passport from 'passport';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import { serverConfig } from './config';
import createRoutes from './routes';
import { dbConnection } from './database/index';
import swaggerOptions from './config/swagger';
import { useJwtStrategy } from './shared/lib/auth';

dotenv.config();

const init = async () => {
  const server = express();

  server.use(bodyParser.json());

  dbConnection.getConnection();

  useJwtStrategy(passport);

  const specs = swaggerJSDoc(swaggerOptions);
  server.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

  server.get('/', (req, res) => {
    return res.send('Hello World');
  });

  createRoutes(server, '/api');

  server.get('*', (req, res) => {
    return res.send('Error 404: Page Not Found');
  });

  server.listen(serverConfig.PORT, () => {
    console.log(
      `⚡️[server]: Server is running at https://localhost:${serverConfig.PORT}`
    );
  });
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
