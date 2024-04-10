import {
  addSelectedProduct,
  getSelectedProducts,
  modifySelectedProduct,
  removeSelectedProduct,
} from "../services/selectedProductService.js";

const createSelectedProduct = async (req, res) => {
  try {
    const data = req.body;
    const createdProduct = await addSelectedProduct(data);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Erro ao criar produto selecionado:", error);
    res.status(500).json({ error: "Erro ao criar produto selecionado" });
  }
};

const getAllSelectedProducts = async (req, res) => {
  try {
    const { formId } = req.params;
    const products = await getSelectedProducts(formId); // Passando o parâmetro formId
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos selecionados:", error);
    res.status(500).json({ error: "Erro ao buscar produtos selecionados" });
  }
};

const getSelectedProductsByFormId = async (req, res) => {
  try {
    const { formId } = req.params;
    const products = await getSelectedProducts(formId);
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos selecionados:", error);
    res.status(500).json({ error: "Erro ao buscar produtos selecionados" });
  }
};

const updateSelectedProduct = async (req, res) => {
  try {
    const { selectedProductId } = req.params;
    const data = req.body;
    const updatedProduct = await modifySelectedProduct(selectedProductId, data);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Erro ao atualizar produto selecionado:", error);
    res.status(500).json({ error: "Erro ao atualizar produto selecionado" });
  }
};

const deleteSelectedProduct = async (req, res) => {
  try {
    const { selectedProductId } = req.params;
    await removeSelectedProduct(selectedProductId);
    res.status(204).end();
  } catch (error) {
    console.error("Erro ao excluir produto selecionado:", error);
    res.status(500).json({ error: "Erro ao excluir produto selecionado" });
  }
};

export {
  createSelectedProduct,
  getAllSelectedProducts,
  getSelectedProductsByFormId,
  updateSelectedProduct,
  deleteSelectedProduct,
};
