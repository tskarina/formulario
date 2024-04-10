// repositories/formRepository.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const formRepository = {
  create: async (formData) => {
    try {
      const createdForm = await prisma.form.create({
        data: formData,
      });
      return createdForm;
    } catch (error) {
      throw new Error("Erro ao criar formulário: " + error.message);
    }
  },

  findById: async (formId) => {
    try {
      const form = await prisma.form.findUnique({
        where: { id: parseInt(formId) },
        include: { selectedProducts: true },
      });
      return form;
    } catch (error) {
      throw new Error("Erro ao buscar formulário: " + error.message);
    }
  },

  deleteById: async (formId) => {
    try {
      await prisma.form.delete({
        where: { id: parseInt(formId) },
      });
    } catch (error) {
      throw new Error("Erro ao excluir formulário: " + error.message);
    }
  },
};

export { formRepository };
