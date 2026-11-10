import { Router } from "express";
import { createInquiry } from "../controllers/inquiryController.js";

export const inquiryRouter = Router();
inquiryRouter.post("/", createInquiry);
