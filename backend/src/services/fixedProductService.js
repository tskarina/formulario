import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createProduct = async (name) => {
  try {
    const createdProduct = await prisma.fixedproduct.create({
      data: {
        name,
      },
    });
    return createdProduct;
  } catch (error) {
    throw error;
  }
};

const getAllProducts = async () => {
  try {
    const products = await prisma.fixedproduct.findMany();
    return products;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const product = await prisma.fixedproduct.findUnique({
      where: {
        id,
      },
    });
    return product;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    await prisma.fixedproduct.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};

export { createProduct, getAllProducts, getProductById, deleteProduct };
