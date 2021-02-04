import { Response } from 'express';
import { HttpError } from '../classes/HttpError';
import { IErrorHandler, IErrorResponse, MyError } from '../interfaces';

export const errorHandler: IErrorHandler = (res: Response, err: MyError) => {
  if (err instanceof HttpError) {
    return res.status(err.status).send({
      error: err.name,
      statusCode: err.status,
      message: err.message,
    } as IErrorResponse);
  }

  return res.status(500).send({
    statusCode: 500,
    error: 'Internal server error',
    message: err.message,
  } as IErrorResponse);
};