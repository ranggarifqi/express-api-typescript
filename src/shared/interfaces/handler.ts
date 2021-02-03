import { NextFunction, Request, Response } from "express";
import { HttpError } from "../classes/HttpError";

type RequstHandlerResponse = Promise<Response<unknown, Record<string, unknown>>> | Response<unknown, Record<string, unknown>>;
export type MyError = Error | HttpError

export interface IRequestHandler {
  (req: Request, res: Response): RequstHandlerResponse
}

export interface IErrorHandler {
  (res: Response, err: MyError): RequstHandlerResponse
}

export interface IMiddlewareHandler {
  (req: Request, res: Response, next: NextFunction): void | Promise<void> | RequstHandlerResponse
}