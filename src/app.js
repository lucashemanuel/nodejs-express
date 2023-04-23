import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Home } from "./controllers/Home.js";
import { Login } from "./controllers/Login.js";

const app = express();

/*app.use("/signup", function (request, response, next) {
  //return response.json("middleware");
  //request.name = "lucas";
  //request.age = 21;
  //next();
  return response.json("signup");
});*/

app.get("/", Home);
app.post(
  "/login",
  function (request, response) {
    //return response.json("middleware login");
    next();
  },
  Login
);

/*app.get("/user", (request, response) => {
  return response.json("user");
});

app.get("/login", (request, response) => {
  return response.json("login");
});

app.get("/list", (request, response) => {
  const { name, age } = request.query;
  return response.send(name);
});*/

app.listen(process.env.PORT ? process.env.PORT : 8081);
