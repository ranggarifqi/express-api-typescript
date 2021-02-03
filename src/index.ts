import express from "express";
import { server as HapiServer, Request, ResponseToolkit } from "@hapi/hapi";
import * as dotenv from "dotenv";
import * as Qs from "qs";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";
import * as HapiSwagger from "hapi-swagger";
import * as HapiJWT from "hapi-auth-jwt2";
import * as Cors from "hapi-cors";

import { serverConfig } from "./config";
import createRoutes from "./routes";
import { dbConnection } from "./database/index";
import swaggerOptions from "./config/swagger";

import * as userRepository from "./database/default/repository/userRepository";

dotenv.config();

const init = async () => {
  const server = express();

  dbConnection.getConnection();

  server.get("/", (req, res) => {
    return res.send("Hello World");
  });

  server.get("*", (req, res) => {
    return res.send("Error 404: Page Not Found");
  });

  server.listen(serverConfig.PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${serverConfig.PORT}`);
  });

  // const server = HapiServer({
  //   port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  //   host: "localhost",
  //   query: {
  //     parser: (query) => Qs.parse(query as any),
  //   },
  // });

  // await server.register([
  //   Inert,
  //   Vision,
  //   {
  //     plugin: HapiSwagger,
  //     options: swaggerOptions,
  //   },
  //   HapiJWT,
  //   {
  //     plugin: Cors,
  //     options: {
  //       origins: ['http://localhost:8080'],
  //       methods: ['POST, GET, OPTIONS, PATCH, PUT, DELETE'],
  //     }
  //   }
  // ]);

  // server.auth.strategy("jwt", "jwt", {
  //   key: serverConfig.AUTH_TOKEN.SECRET,
  //   validate: async (decoded: any, request, h) => {
  //     const user = await userRepository.findById(decoded.id, {
  //       relations: ["role"]
  //     });

  //     if (!user) {
  //       return {
  //         isValid: false
  //       }
  //     }

  //     return {
  //       isValid: true,
  //       credentials: user
  //     };
  //   },
  // });

  // createRoutes(server, serverConfig.BASE_REST_API_PATH);

  // server.route({
  //   method: "GET",
  //   path: "/",
  //   handler: (request: Request, h: ResponseToolkit) => {
  //     return "Hello World!";
  //   },
  // });

  // server.route({
  //   method: "*",
  //   path: "/{any*}",
  //   handler: function (request, h) {
  //     return "404 Error! Page Not Found!";
  //   },
  // });

  // await server.start();
  // console.log("Server running on %s", server.info.uri);
  // console.log(`API Documentation: ${server.info.uri}/documentation`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
