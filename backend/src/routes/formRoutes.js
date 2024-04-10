// routes/formRoutes.js

import express from "express";
import {
  createForm,
  getFormById,
  deleteFormById,
} from "../controllers/formController.js";

const router = express.Router();

router.post("/forms", createForm);

router.get("/forms/:formId", getFormById);

router.delete("/forms/:formId", deleteFormById);

export default router;
