import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createFixedProduct = async (name) => {
  try {
    const createdProduct = await prisma.fixedproduct.create({
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
    const products = await prisma.fixedproduct.findMany();
    return products;
  } catch (error) {
    throw new Error(`Erro ao buscar produtos fixos: ${error.message}`);
  }
};

const getFixedProductById = async (id) => {
  try {
    const product = await prisma.fixedproduct.findUnique({
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
