import { Injectable } from "@nestjs/common";
import { prisma } from "@repo/database";

@Injectable()
export class CartService {
  
  async getCart() {
    const cart = await prisma.cart.findMany();

    if (cart.length) {
      return cart;
    } 

    return await prisma.cart.create({data: {}});
  }
}
