// import { Decimal } from "@prisma/client/runtime/library";

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  valor: any;
  link?: string;
  tipo_produto_id: number;
  qtd_estoque?: number;
  disponivel?: boolean;
  quantidade?: number;
  created_at?: Date;
  updated_at?: Date;
}
/*
model produtos {
  id              Int           @id @default(autoincrement()) @db.UnsignedInt
  nome            String        @db.VarChar(255)
  descricao       String        @db.VarChar(255)
  valor           Decimal       @db.Decimal(10, 2)
  link            String?       @db.VarChar(255)
  disponivel      Boolean?
  qtd_estoque     Int?          @db.Int           
  created_at      DateTime?     @default(now()) @db.Timestamp(0)
  updated_at      DateTime?     @updatedAt @db.Timestamp(0)
  tipo_produto_id Int           @db.UnsignedInt
  tipo_produto    tipo_produto  @relation(fields: [tipo_produto_id], references: [id], onDelete: Cascade, map: "produtos_tipo_produto_id_foreign")
  venda_items     venda_items[]

  @@index([tipo_produto_id], map: "produtos_tipo_produto_id_foreign")
}
*/
