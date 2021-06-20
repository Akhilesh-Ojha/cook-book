import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

const cloudinaryVariable = cloudinary.v2;

cloudinaryVariable.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const storage = new CloudinaryStorage({
  cloudinary: cloudinaryVariable,
  params: {
    folder: "CookBook",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});
