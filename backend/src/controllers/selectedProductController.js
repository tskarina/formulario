import {
  addSelectedProduct,
  getAllProducts,
  getSelectedProducts,
} from "../services/selectedProductService.js";

// Função para criar um produto selecionado
const createSelectedProduct = async (req, res) => {
  try {
    const data = req.body; // preciso passar o id do formulario e o id do produto
    // Chama a função do service para adicionar um produto selecionado, passando os dados extraídos da requisição como parâmetro
    const createdProduct = await addSelectedProduct(data);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Erro ao criar produto selecionado:", error);
    res.status(500).json({ error: "Erro ao criar produto selecionado" });
  }
};

const getAllSelectedProducts = async (req, res) => {
  try {
    // Chama a função do service para buscar todos os produtos selecionados
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos selecionados:", error);
    res.status(500).json({ error: "Erro ao buscar produtos selecionados" });
  }
};

const getSelectedProductsByFormId = async (req, res) => {
  try {
    const { formId } = req.params;
    // Chama a função do service para buscar os produtos selecionados por IDs
    const products = await getSelectedProducts(formId);
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos selecionados:", error);
    res.status(500).json({ error: "Erro ao buscar produtos selecionados" });
  }
};

export {
  createSelectedProduct,
  getAllSelectedProducts,
  getSelectedProductsByFormId,
};
