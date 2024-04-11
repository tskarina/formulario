import express from "express";
import {
  createSelectedProduct,
  getAllSelectedProducts,
  getSelectedProductsByFormId,
} from "../controllers/selectedProductController.js";

const router = express.Router();

router.post("/selected-products", createSelectedProduct);

router.get("/selected-products", getAllSelectedProducts);

router.get("/forms/:formId/selected-products", getSelectedProductsByFormId);

export default router;
