import { Express } from "express";
import * as userController from './userController';
import { filterSchema, userLoginDto } from '../../../shared/dtos';
import { isAuthenticatedMiddleware } from "../../../shared/middlewares";


export default function (app: Express, basePath: string) {
  app.get(basePath, isAuthenticatedMiddleware, userController.findUser);
  app.post(basePath + '/login', userController.loginUser);
}