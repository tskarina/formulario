// repository.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createSelectedProduct = async (data) => {
  try {
    return await prisma.selectedproduct.create({
      data: data,
    });
  } catch (error) {
    throw new Error("Erro ao criar produto selecionado: " + error.message);
  }
};

const getAllSelectedProducts = async () => {
  // Removendo o parâmetro formId
  try {
    return await prisma.selectedproduct.findMany({
      // Removendo a cláusula where
      include: {
        product: true,
      },
    });
  } catch (error) {
    throw new Error(
      "Erro ao buscar todos os produtos selecionados: " + error.message
    );
  }
};
const getSelectedProductsByFormId = async (formId) => {
  try {
    const products = await prisma.selectedproduct.findMany({
      where: formId ? { formId: parseInt(formId) } : {}, // Tornando o parâmetro formId opcional
      include: {
        product: true,
      },
    });
    return products;
  } catch (error) {
    throw new Error("Erro ao obter produtos selecionados: " + error.message);
  }
};

const updateSelectedProduct = async (selectedProductId, data) => {
  try {
    return await prisma.selectedproduct.update({
      where: {
        id: selectedProductId,
      },
      data: data,
    });
  } catch (error) {
    throw new Error("Erro ao atualizar produto selecionado: " + error.message);
  }
};

const deleteSelectedProduct = async (selectedProductId) => {
  try {
    return await prisma.selectedproduct.delete({
      where: {
        id: parseInt(selectedProductId),
      },
    });
  } catch (error) {
    throw new Error("Erro ao excluir produto selecionado: " + error.message);
  }
};

export {
  createSelectedProduct,
  getAllSelectedProducts,
  getSelectedProductsByFormId,
  updateSelectedProduct,
  deleteSelectedProduct,
};
