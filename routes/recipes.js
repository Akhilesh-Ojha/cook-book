import express from "express";
import {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  likeRecipe,
  bookMarkRecipe,
  getRecipesBySearch,
  getMostLikedRecipe,
} from "../controllers/recipes.js";
import multer from "multer";
import auth from "../middleware/auth.js";

import { storage } from "../cloudinary/index.js";
const upload = multer({ storage });

const router = express.Router();

router.get("/", getRecipes);
router.get("/search", getRecipesBySearch);
router.get("/most-liked", getMostLikedRecipe);

router.get("/:id", getRecipe);
router.post("/", auth, upload.single("image"), createRecipe);
router.patch("/:id", auth, updateRecipe);
router.delete("/:id", auth, deleteRecipe);
router.patch("/:id/like", auth, likeRecipe);
router.patch("/:id/bookMark", auth, bookMarkRecipe);

export default router;
