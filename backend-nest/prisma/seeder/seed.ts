import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase(): Promise<void> {
  // Cria o usuário admin
  await prisma.users.createMany({
    data: [
      {
        name: "admin",
        email: "admin@email.com",
        password: "senha123",
      },
    ],
  });

  // Cria os tipos de produtos
  await prisma.tipo_produto.createMany({
    data: [
      {
        nome: "Produto Simples",
        descricao: "Livros, flores, ferramentas e etc",
        tipo: "simples",
      },
      {
        nome: "Produto Digital",
        descricao: "Ebooks, videoaulas, audiobooks, PDFs e etc...",
        tipo: "digital",
      },
      {
        nome: "Produto Configurável",
        descricao: "Camisetas, canecas, tênis e etc",
        tipo: "configuravel",
      },
      {
        nome: "Produto Agrupado",
        descricao: "Conjunto de Produtos Simples",
        tipo: "agrupado",
      },
    ],
  });
}

seedDatabase()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
