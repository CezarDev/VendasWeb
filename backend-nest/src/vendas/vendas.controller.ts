import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common";
import { VendasService } from "./vendas.service";

@Controller("vendas")
export class VendasController {
  constructor(private readonly vendasService: VendasService) {}

  @Post()
  create(@Body() request: any) {
    //return request.cliente;
    return this.vendasService.create(request);
  }

  @Get()
  findAll() {
    return this.vendasService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.vendasService.findOne(+id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.vendasService.remove(+id);
  }
}
