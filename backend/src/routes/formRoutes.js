import express from "express";
import { createForm, getFormById } from "../controllers/formController.js";

const router = express.Router();

router.post("/forms", createForm);

router.get("/forms/:formId", getFormById);

export default router;
