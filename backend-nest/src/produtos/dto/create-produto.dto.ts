import { Decimal } from "@prisma/client/runtime/library";
import { IsNotEmpty, IsString, IsNumber, ValidateIf } from "class-validator";

export class CreateProdutoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  valor: Decimal;

  @IsNotEmpty()
  tipo_produto_id: number;

  @ValidateIf((o) => o.link !== undefined || o.link !== "")
  @IsString()
  link?: string;
}
