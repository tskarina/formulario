import express from "express";
import {
  createSelectedProduct,
  getAllSelectedProducts,
  getSelectedProductsByFormId,
  updateSelectedProduct,
  deleteSelectedProduct,
} from "../controllers/selectedProductController.js";

const router = express.Router();

router.post("/selected-products", createSelectedProduct);

router.get("/selected-products", getAllSelectedProducts);

router.get("/forms/:formId/selected-products", getSelectedProductsByFormId);

router.put("/selected-products/:selectedProductId", updateSelectedProduct);

router.delete("/selected-products/:selectedProductId", deleteSelectedProduct);

export default router;
