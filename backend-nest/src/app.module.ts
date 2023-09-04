import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { VendasModule } from "./vendas/vendas.module";
import { ClientesModule } from "./clientes/clientes.module";
import { ProdutosModule } from "./produtos/produtos.module";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"

@Module({
  imports: [
    ConfigModule.forRoot(),
    VendasModule,
    ClientesModule,
    ProdutosModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
