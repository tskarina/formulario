import {
  createSelectedProduct,
  getAllSelectedProducts,
  getSelectedProductsByFormId,
} from "../repositories/selectedProductRepository.js";

// Função do service para adicionar um produto selecionado
const addSelectedProduct = async (data) => {
  // Chama a função do repositório para criar um novo produto selecionado, passando os dados recebidos como parâmetro
  return await createSelectedProduct(data);
};

const getAllProducts = async () => {
  // Chama a função do repositório para buscar todos os produtos selecionados, retornando um array de objetos
  return await getAllSelectedProducts();
};

// Chama a função do repositório para buscar os produtos selecionados por IDs
const getSelectedProducts = async (formId) => {
  return await getSelectedProductsByFormId(formId);
};

export { addSelectedProduct, getAllProducts, getSelectedProducts };
