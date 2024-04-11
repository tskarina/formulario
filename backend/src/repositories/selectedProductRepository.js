import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função do repositório para criar um produto selecionado no banco de dados
const createSelectedProduct = async (data) => {
  try {
    // recebe os dados criar um novo produto selecionado no banco de dados, passando os dados recebidos como parâmetro
    return await prisma.selectedproduct.create({
      data: data,
    });
  } catch (error) {
    throw new Error("Erro ao criar produto selecionado: " + error.message);
  }
};

const getAllSelectedProducts = async () => {
  try {
    return await prisma.selectedproduct.findMany({
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

export {
  createSelectedProduct,
  getAllSelectedProducts,
  getSelectedProductsByFormId,
};
