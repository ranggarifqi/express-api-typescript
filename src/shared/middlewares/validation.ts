import { NextFunction, Request, Response } from "express";
import {Schema} from "joi";
import { errorHandler } from "../functions";

type Location = "body" | "query" | "path"

export const validate = (schema: Schema, location: Location) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req[location]);
      return next();
    } catch (error) {
      return errorHandler(res, error);
    }
  }
}