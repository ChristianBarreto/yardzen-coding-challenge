import { Injectable } from "@nestjs/common";
import { prisma } from "@repo/database";

@Injectable()
export class ProductService {
  
  async getProducts() {
    const products = await prisma.product.findMany();
    return products;
  }
}
