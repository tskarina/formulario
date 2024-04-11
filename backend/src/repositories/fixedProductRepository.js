import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createFixedProduct = async (name) => {
  try {
    const createdProduct = await prisma.fixedproduct.create({
      //Tenta criar um novo produto fixo no banco de dados
      data: {
        name: name,
      },
    });
    return createdProduct;
  } catch (error) {
    throw new Error(`Erro ao criar produto fixo: ${error.message}`);
  }
};

const getAllFixedProducts = async () => {
  try {
    const products = await prisma.fixedproduct.findMany(); //Tenta buscar todos os produtos fixos no banco de dados utilizando o método findMany do Prisma.
    return products;
  } catch (error) {
    throw new Error(`Erro ao buscar produtos fixos: ${error.message}`);
  }
};

const getFixedProductById = async (id) => {
  try {
    const product = await prisma.fixedproduct.findUnique({
      //Tenta buscar um produto fixo específico no banco de dados
      where: {
        id: parseInt(id),
      },
    });
    return product;
  } catch (error) {
    throw new Error(`Erro ao buscar produto fixo: ${error.message}`);
  }
};

const deleteFixedProduct = async (id) => {
  try {
    await prisma.fixedproduct.delete({
      //Tenta excluir um produto fixo específico do banco de dados
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    throw new Error(`Erro ao excluir produto fixo: ${error.message}`);
  }
};

export {
  createFixedProduct,
  getAllFixedProducts,
  getFixedProductById,
  deleteFixedProduct,
};
