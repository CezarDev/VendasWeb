import { Injectable } from "@nestjs/common";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-cliente.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Cliente } from "./entities/cliente.entity";
import { NotFoundError } from "src/common/errors/types/NotFoundError";
//import { UnauthorizedError } from "src/common/errors/types/UnauthorizedError";

@Injectable()
export class ClientesService {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.prisma.clientes.findUnique({
      where: { id: id }, //
    });

    if (!cliente) {
      throw new NotFoundError("Não encontrado");
    }

    return cliente;
  }

  async findAll(): Promise<Cliente[]> {
    return this.prisma.clientes.findMany({
      select: { id: true, nome: true, cpf: true, email: true },
      orderBy: { nome: "asc" },
    });//
  }

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    return this.prisma.clientes.create({
      data: createClienteDto,
    });
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    return this.prisma.clientes.update({
      where: { id: id },
      data: updateClienteDto,
    });
  }

  async remove(id: number) {
    return this.prisma.clientes.delete({ where: { id: id } });
  }
}
