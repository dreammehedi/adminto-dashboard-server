// controllers/gallery.controller.js
import Gallery from "../models/gallery.model.js";

const getGalleryData = async (req, res) => {
  const getAllGalleryData = await Gallery.find();
  res.json({
    success: true,
    message: "Gallery Data Get.",
    payload: getAllGalleryData,
  });
};

export { getGalleryData };
