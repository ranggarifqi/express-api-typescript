import { Request, Response } from "express";
import * as userUsecase from '../../../usecases/userUsecase';
import { errorHandler } from '../../../shared/functions/error';
import { ILoginUser, ISuccessResponse } from '../../../shared/interfaces';

export const findUser = async (req: Request, res: Response) => {
  try {
    const filter = req.query;
    const users = await userUsecase.findUsers(filter);
    const res: ISuccessResponse = {
      statusCode: 200,
      message: 'Get user successful',
      results: users
    };
    return res;
  } catch (error) {
    return errorHandler(res, error);
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const body = req.body as ILoginUser;

    const loginRes = await userUsecase.login(body);

    const res: ISuccessResponse = {
      statusCode: 200,
      message: "Login successful",
      results: loginRes
    }
    return res;
  } catch (error) {
    return errorHandler(res, error);
  }
};