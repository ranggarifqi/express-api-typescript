import { Express } from "express";
import createV1Routes from "./v1";

export default function (app: Express, basePath: string): void {
  createV1Routes(app, basePath + "/v1")
}