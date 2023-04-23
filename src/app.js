import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Home } from "./controllers/Home.js";
import { Login } from "./controllers/Login.js";

const app = express();

app.get("/", Home);
app.post("/login", Login);

app.get("/user", (request, response) => {
  return response.json("user");
});

app.get("/login", (request, response) => {
  return response.json("login");
});

app.get("/list", (request, response) => {
  const { name, age } = request.query;
  return response.send(name);
});

app.listen(process.env.PORT ? process.env.PORT : 8081);
