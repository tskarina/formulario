import { formService } from "../services/formService.js";

const createForm = async (req, res) => {
  //Quando uma requisição é feita para criar um novo formulário, o controller create form é acionado
  try {
    const formData = req.body; //Extrai os dados do formulário do corpo da requisição.
    const createdForm = await formService.createForm(formData); // em seguida chama a função do service passando os dados do formulario como argumento

    res.status(201).json(createdForm);
  } catch (error) {
    console.error("Erro ao criar formulário:", error);
    res.status(500).json({ error: "Erro ao criar formulário" });
  }
};

const getFormById = async (req, res) => {
  const formId = req.params.formId;
  try {
    if (isNaN(formId) || formId === null || formId === undefined) {
      //Verifica se o formId não é um número válido, ou se é null ou undefined. isNaN(formId): Verifica se o formId não é um número (NaN). formId === null || formId === undefined: Verifica se o formId é null ou undefined.
      throw new Error("ID do formulário inválido");
    }
    const form = await formService.getFormById(formId);
    if (!form) {
      // Verifica se o formulário não foi encontrado.
      return res.status(404).json({ error: "Formulário não encontrado" });
    }
    res.status(200).json(form); //estanod tudo certo retorna o formulário
  } catch (error) {
    console.error("Erro ao buscar formulário:", error);
    res.status(500).json({ error: "Erro ao buscar formulário" });
  }
};

export { createForm, getFormById };
