import { NextFunction, Request, Response } from "express";
import {Schema} from "joi";
import { errorHandler } from "../functions";
import { IMiddlewareHandler } from "../interfaces";

type Location = "body" | "query" | "path"

export const validate = (schema: Schema, location: Location): IMiddlewareHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req[location]);
      next();
    } catch (error) {
      return errorHandler(res, error);
    }
  }
}