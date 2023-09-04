import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsString()
  @IsNotEmpty()
  readonly cpf: string;

  @IsEmail()
  readonly email: string;
}
