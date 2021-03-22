import { Options } from 'swagger-jsdoc';
import { serverConfig } from '.';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API Documentation',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Rangga Rifqi Pratama',
        url: 'https://ranggarifqi.com',
        email: 'rangga@ranggarifqi.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:' + serverConfig.PORT,
        description: 'Development server'
      },
    ],
  },
  apis: ['./routes/*.ts', './shared/*.ts'],
};

export default swaggerOptions;
