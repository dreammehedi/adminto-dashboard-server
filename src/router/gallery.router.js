// routes/gallery.router.js
import express from "express";
import {
  getGalleryData,
  postGalleryData,
} from "../controllers/gallery.controller.js";

const galleryRouter = express.Router();

galleryRouter.get("/gallery", getGalleryData);
galleryRouter.post("/gallery", postGalleryData);

export default galleryRouter;
