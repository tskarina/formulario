import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const formService = {
  createForm: async (formData) => {
    try {
      // Extrair os IDs dos produtos selecionados
      const { selectedProducts, ...formDataWithoutProducts } = formData;

      // Criar o formulário no banco de dados
      const createdForm = await prisma.form.create({
        data: {
          ...formDataWithoutProducts,
          selectedProducts: {
            // Criar os relacionamentos com os produtos selecionados
            create: selectedProducts.map((productId) => ({
              product: { connect: { id: parseInt(productId) } },
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
      // Buscar o formulário pelo ID no banco de dados
      const form = await prisma.form.findUnique({
        where: { id: parseInt(formId) },
        include: { selectedProducts: true },
      });

      return form;
    } catch (error) {
      throw new Error("Erro ao buscar formulário: " + error.message);
    }
  },
};

export { formService };
