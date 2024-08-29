import { model, Schema } from "mongoose";
// gallery schema
const gallerySchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

// gallery collection
const Gallery = model("Gallery", gallerySchema, "Gallery");
export default Gallery;
