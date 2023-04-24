import express from "express";
import { Post } from "../controllers/Post.js";

const post = express.Router();

post.get("/edit/:id", Post);

export { post };
