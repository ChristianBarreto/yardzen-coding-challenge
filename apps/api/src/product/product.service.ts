import { Injectable } from "@nestjs/common";
import { prisma } from "@repo/database";

@Injectable()
export class ProductService {
  
  async getProducts(name: string, orderBy: any) {
    name = name === undefined ? '' : name;
    orderBy = orderBy === undefined ? {type: 'asc'} : orderBy;

    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      orderBy: orderBy // NOTE: Enum sorts according its intenger value and does not mean it sorts like string
      // it can be turnarounded using SQL query
      // check more: https://github.com/prisma/prisma/issues/24120
    });
    return products;
  }
}
