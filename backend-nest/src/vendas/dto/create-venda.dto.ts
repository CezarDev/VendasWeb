import { IsNotEmpty, IsString } from "class-validator";
import { CreateVendaItemsDto } from "./create-vendaitems.dto";
import { CreateClienteDto } from "src/clientes/dto/create-cliente.dto";

export class CreateVendaDto {
  @IsString()
  descricao: string;

  @IsNotEmpty()
  cliente: CreateClienteDto[];

  @IsNotEmpty()
  itens: CreateVendaItemsDto[];
}
