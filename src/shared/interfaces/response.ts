
export interface ISuccessResponse {
  statusCode: number;
  message: string;
  results: unknown;
}

export interface IErrorResponse {
  statusCode: number;
  error: string;
  message: string;
}