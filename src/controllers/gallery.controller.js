// controllers/gallery.controller.js
import Gallery from "../models/gallery.model.js";

// get gallery data
const getGalleryData = async (req, res) => {
  // get all gallery data
  const getAllGalleryData = await Gallery.find();

  // get all category
  const getAllCategory = await Gallery.distinct("category");

  // send response in client request
  res.json({
    success: true,
    message: "Gallery Data Get.",
    allCategory: ["All", ...getAllCategory] || [],
    payload: getAllGalleryData || [],
  });
};

// post gallery data
const postGalleryData = async (req, res) => {
  const galleryData = req.body;
  const result = await Gallery.insertMany(galleryData);

  // send response in client request
  res.json({
    result,
    success: true,
    message: "Gallery Data Inserted Successfully.",
    payload: result,
  });
};
export { getGalleryData, postGalleryData };
