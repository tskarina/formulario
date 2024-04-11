import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const formRepository = {
  create: async (formData) => {
    try {
      const createdForm = await prisma.form.create({
        //Cria um novo registro na tabela form do banco de dados utilizando o método create do Prisma, passando os dados do formulário como argumento.
        data: formData,
      });
      return createdForm;
    } catch (error) {
      throw new Error("Erro ao criar formulário: " + error.message);
    }
  },

  findById: async (formId) => {
    // recebe o ID do formulário como parâmetro.
    try {
      const form = await prisma.form.findUnique({
        //  Busca um registro na tabela form do banco de dados com base no ID fornecido, utilizando o método findUnique do Prisma.
        where: { id: parseInt(formId) },
        include: { selectedProducts: true }, // devo incluir os produtos selecionados relacionados ao formulário na consulta.
      });
      return form;
    } catch (error) {
      throw new Error("Erro ao buscar formulário: " + error.message);
    }
  },
};

export { formRepository };
