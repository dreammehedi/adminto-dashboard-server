import cors from "cors";
import express from "express";
import galleryRouter from "./router/gallery.router.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

// all router middleware
app.use("/api", galleryRouter);

export default app;
