// routes/gallery.router.js
import express from "express";
import { getGalleryData } from "../controllers/gallery.controller.js";

const galleryRouter = express.Router();

galleryRouter.get("/gallery", getGalleryData);

export default galleryRouter;
