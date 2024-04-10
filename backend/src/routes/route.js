import express from "express";
import fixedProductRoutes from "./fixedProductRoutes.js";
import formRoutes from "./formRoutes.js";
import selectedProductRoutes from "./selectedProductRoutes.js";
const router = express.Router();

router.use(fixedProductRoutes);
router.use(formRoutes);
router.use(selectedProductRoutes);
export default router;
