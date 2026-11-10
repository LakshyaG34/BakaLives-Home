import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { healthRouter } from "./routes/healthRoutes.js";
import { inquiryRouter } from "./routes/inquiryRoutes.js";

export const app = express();

app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    if (!origin || env.allowedOrigins.length === 0 || env.allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Origin is not allowed by CORS"));
  },
}));
app.use(express.json({ limit: "20kb" }));

app.use("/api/health", healthRouter);
app.use("/api/inquiries", inquiryRouter);

app.use(errorHandler);
