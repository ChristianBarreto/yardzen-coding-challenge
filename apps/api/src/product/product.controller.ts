import { Controller, Get, Query } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(@Query('name') name: string, @Query('orderBy') orderBy: string) {
    return this.productService.getProducts(name, orderBy);
  }
}
