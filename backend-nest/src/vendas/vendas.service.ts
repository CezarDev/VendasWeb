import { Injectable } from "@nestjs/common";
//import { CreateVendaDto } from "./dto/create-venda.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { NotFoundError } from "src/common/errors/types/NotFoundError";
//import { Venda } from "./entities/venda.entity";
//import { VendaItems } from "./entities/venda_items.entity";
import { Decimal } from "@prisma/client/runtime/library";

@Injectable()
export class VendasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(venda: any) {
    //return venda;
    const cliente = await this.prisma.clientes.findUnique({
      where: { id: venda.cliente.id },
    });

    if (!cliente) {
      throw new NotFoundError("Cliente não encontrado");
    }

    if (venda.itens.length === 0 || venda.itens === undefined) {
      throw new NotFoundError("Venda sem itens");
    }
    let valorTotal = 0.0;

    const novaVenda = await this.prisma.vendas.create({
      data: {
        descricao: venda.descricao,
        valor_total: venda.valor_total ? venda.valor_total : valorTotal,
        data_venda: new Date(),
        cliente_id: venda.cliente.id,
      },
    });

    for (const item of venda.itens) {
      const produto = await this.prisma.produtos.findUnique({
        where: { id: item.id },
      });

      if (!produto) {
        throw new NotFoundError("Produto não encontrado");
      }

      const valorProduto = new Decimal(produto.valor);
      const valorTotalItem = valorProduto.toNumber() * item.quantidade;

      valorTotal += valorTotalItem;

      await this.prisma.venda_items.create({
        data: {
          venda_id: novaVenda.id,
          produto_id: produto.id,
          quantidade: item.quantidade,
          valor_unitario: produto.valor,
          valor_total: valorTotalItem,
          cliente_id: cliente.id,
        },
      });

      await this.prisma.vendas.update({
        where: { id: novaVenda.id },
        data: { valor_total: valorTotal },
      });
    }

    return await this.prisma.vendas.findUnique({
      where: { id: novaVenda.id },
      include: { clientes: true, venda_items: true },
    });
  }

  findAll(): Promise<any> {
    return this.prisma.vendas.findMany({
      include: { clientes: true, venda_items: true },
    });
  }

  findOne(id: number): Promise<any> {
    return this.prisma.vendas.findUnique({
      where: { id: id },
      include: { clientes: true, venda_items: true },
    });
  }

  remove(id: number) {
    return this.prisma.vendas.delete({ where: { id: id } });
  }
}
