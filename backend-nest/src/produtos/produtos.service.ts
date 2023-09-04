import { Injectable } from "@nestjs/common";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";
import { Produto } from "./entities/produto.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ProdutosService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProdutoDto: CreateProdutoDto): Promise<CreateProdutoDto> {
    return this.prisma.produtos.create({ data: createProdutoDto });
  }

  async findAll(): Promise<Produto[]> {
    return this.prisma.produtos.findMany({});
  }

  async findOne(id: number): Promise<Produto> {
    return this.prisma.produtos.findUnique({ where: { id: id } });
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produtos.update({
      data: updateProdutoDto,
      where: { id: id },
    });
  }

  async remove(id: number): Promise<Produto> {
    return this.prisma.produtos.delete({ where: { id: id } });
  }
}
