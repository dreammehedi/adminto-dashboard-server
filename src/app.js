import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import createHttpError from "http-errors";
import morgan from "morgan";
import galleryRouter from "./router/gallery.router.js";

// Rate limiting configuration
const limiterApi = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, Please Try Again Later!",
});

const app = express();

// Middleware setup
app.use(
  cors({
    origin: "*", // Consider restricting this in production
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(limiterApi);

// Home route definition
app.get("/", (req, res) => {
  res.send("Adminto Dashboard Server.");
});

// All router middleware
app.use("/api", galleryRouter);

// Client-side error handling (404 Not Found)
app.use((req, res, next) => {
  next(createHttpError(404, "Not Found!"));
});

// Server-side error handling (including 404 errors and other server errors)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error!",
  });
});

export default app;
