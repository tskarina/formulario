import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const formService = {
  createForm: async (formData) => {
    //recebe os dados do formulario como argumento
    try {
      const { selectedProducts, ...formDataWithoutProducts } = formData; //eu faço a desestruturação para separar os produtos selecionados dos demais dados do formulario para que eu possa tratar os produtos de forma isolada

      const createdForm = await prisma.form.create({
        data: {
          ...formDataWithoutProducts, //usei o operador spread para incluir todas as informações do formulário, exceto os produtos selecionados.

          selectedProducts: {
            // depois trato os produtos separadamente

            create: selectedProducts.map((productId) => ({
              // uso o MAP para percorrer cada produto selecionado

              product: { connect: { id: parseInt(productId) } }, // connect para criar uma entrada especial no banco de dados e conectar com os produtos selecionados ao formulario
              // connect - especifica que quero conectar o produto existente no banco de dados com o ID igual a productId ao novo formulário.
              // parseInt - converte o productId em um número inteiro
            })),
          },
        },
      });

      return createdForm;
    } catch (error) {
      throw new Error("Erro ao criar formulário: " + error.message);
    }
  },

  getFormById: async (formId) => {
    try {
      const form = await prisma.form.findUnique({
        //Utilizo o método findUnique para buscar um registro na tabela form do banco de dados com base no ID fornecido.
        where: { id: parseInt(formId) }, // Especifico que estou buscando um registro com o ID igual ao formId fornecido.
        include: { selectedProducts: true }, //Inclui os produtos selecionados relacionados a esse formulário na consulta.
      });

      return form;
    } catch (error) {
      throw new Error("Erro ao buscar formulário: " + error.message);
    }
  },
};

export { formService };
