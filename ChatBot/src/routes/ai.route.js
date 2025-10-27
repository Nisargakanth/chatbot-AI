import express from "express";
import { askQuestion } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.route("/ask").post(askQuestion);

export { aiRouter };
