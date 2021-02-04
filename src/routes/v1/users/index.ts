import { Express } from 'express';
import * as userController from './userController';
import { filterSchema, userLoginDto } from '../../../shared/dtos';
import {
  isAuthenticatedMiddleware,
  validate,
} from '../../../shared/middlewares';

export default function (app: Express, basePath: string): void {
  app.get(
    basePath,
    isAuthenticatedMiddleware,
    validate(filterSchema, 'query'),
    userController.findUser
  );

  /**
   * @swagger
   *
   * /login:
   *   post:
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: username
   *         in: formData
   *         required: true
   *         type: string
   *       - name: password
   *         in: formData
   *         required: true
   *         type: string
   */
  app.post(
    basePath + '/login',
    validate(userLoginDto, 'body'),
    userController.loginUser
  );
}
