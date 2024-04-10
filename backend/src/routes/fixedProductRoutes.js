import express from "express";
import {
  createFixedProduct,
  getAllFixedProducts,
  getFixedProductById,
  deleteFixedProduct,
} from "../controllers/fixedProductController.js";

const router = express.Router();

router.post("/fixed-products", createFixedProduct);

router.get("/fixed-products", getAllFixedProducts);

router.get("/fixed-products/:id", getFixedProductById);

router.delete("/fixed-products/:id", deleteFixedProduct);

export default router;
