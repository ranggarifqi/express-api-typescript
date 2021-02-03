import { Express } from "express";
import * as userController from './userController';
import { filterSchema, userLoginDto } from '../../../shared/dtos';


export default function (app: Express, basePath: string) {

  app.get(basePath, userController.findUser);
  app.post(basePath + '/login', userController.loginUser);

  // server.route({
  //   method: "GET",
  //   path: basePath,
  //   handler: userController.findUser,
  //   options: {
  //     auth: 'jwt',
  //     description: 'Get users with filter',
  //     notes: 'Get all users if filter is not specified.',
  //     tags: ['api', 'user'],
  //     validate: {
  //       query: filterSchema
  //     },
  //   }
  // });

  // server.route({
  //   method: "POST",
  //   path: basePath + "/login",
  //   handler: userController.loginUser,
  //   options: {
  //     description: 'Login user',
  //     notes: 'Login user by email & password',
  //     tags: ['api', 'user'],
  //     validate: {
  //       payload: userLoginDto
  //     }
  //   }
  // });
}