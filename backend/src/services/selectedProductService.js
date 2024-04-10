import {
  createSelectedProduct,
  getAllSelectedProducts,
  getSelectedProductsByFormId,
  updateSelectedProduct,
  deleteSelectedProduct,
} from "../repositories/selectedProductRepository.js";

const addSelectedProduct = async (data) => {
  return await createSelectedProduct(data);
};

const getAllProducts = async () => {
  return await getAllSelectedProducts();
};

const getSelectedProducts = async (formId) => {
  return await getSelectedProductsByFormId(formId);
};

const modifySelectedProduct = async (selectedProductId, data) => {
  return await updateSelectedProduct(selectedProductId, data);
};

const removeSelectedProduct = async (selectedProductId) => {
  return await deleteSelectedProduct(selectedProductId);
};

export {
  addSelectedProduct,
  getAllProducts,
  getSelectedProducts,
  modifySelectedProduct,
  removeSelectedProduct,
};
