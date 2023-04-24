import express from "express";
import { Home } from "../controllers/Home.js";

const router = express.Router();

router.get("/", Home);

export { router };
