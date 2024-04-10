import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
} from "../services/fixedProductService.js";

const createFixedProduct = async (req, res) => {
  const { name } = req.body;
  try {
    const createdProduct = await createProduct(name);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Erro ao criar produto fixo:", error);
    res.status(500).json({ error: "Erro ao criar produto fixo" });
  }
};

const getAllFixedProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos fixos:", error);
    res.status(500).json({ error: "Erro ao buscar produtos fixos" });
  }
};

const getFixedProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ error: "Produto fixo não encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Erro ao buscar produto fixo:", error);
    res.status(500).json({ error: "Erro ao buscar produto fixo" });
  }
};

const deleteFixedProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await deleteProduct(id);
    res.status(204).end();
  } catch (error) {
    console.error("Erro ao excluir produto fixo:", error);
    res.status(500).json({ error: "Erro ao excluir produto fixo" });
  }
};

export {
  createFixedProduct,
  getAllFixedProducts,
  getFixedProductById,
  deleteFixedProduct,
};
