import express from "express";
import { aiRouter } from "./ai.route.js";

const indexRouter = express.Router();

indexRouter.use("/api/v1/ai", aiRouter);

export { indexRouter };
