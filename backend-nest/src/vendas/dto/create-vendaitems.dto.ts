import { IsNotEmpty } from "class-validator";

export class CreateVendaItemsDto {
  @IsNotEmpty()
  produto_id: number;

  quantidade?: number;

  @IsNotEmpty()
  descricao: string;
}
