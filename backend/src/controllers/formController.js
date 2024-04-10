// controllers/formController.js

import { formService } from "../services/formService.js";

const createForm = async (req, res) => {
  try {
    const formData = req.body;
    const createdForm = await formService.createForm(formData);
    res.status(201).json(createdForm);
  } catch (error) {
    console.error("Erro ao criar formulário:", error);
    res.status(500).json({ error: "Erro ao criar formulário" });
  }
};

const getFormById = async (req, res) => {
  const formId = req.params.formId;
  try {
    if (isNaN(formId) || formId === null || formId === undefined) {
      throw new Error("ID do formulário inválido");
    }
    const form = await formService.getFormById(formId);
    if (!form) {
      return res.status(404).json({ error: "Formulário não encontrado" });
    }
    res.status(200).json(form);
  } catch (error) {
    console.error("Erro ao buscar formulário:", error);
    res.status(500).json({ error: "Erro ao buscar formulário" });
  }
};

const deleteFormById = async (req, res) => {
  const formId = req.params.formId;
  try {
    if (isNaN(formId) || formId === null || formId === undefined) {
      throw new Error("ID do formulário inválido");
    }
    await formService.deleteFormById(formId);
    res.status(204).end();
  } catch (error) {
    console.error("Erro ao excluir formulário:", error);
    res.status(500).json({ error: "Erro ao excluir formulário" });
  }
};

export { createForm, getFormById, deleteFormById };
