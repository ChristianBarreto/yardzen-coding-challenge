import { Injectable } from "@nestjs/common";
import { prisma } from "@repo/database";

@Injectable()
export class CartService {

  async getCart() {
    const cart = await prisma.cart.findFirst();

    if (cart) {
      const items = await prisma.cartItem.findMany({
        where: {cartId: cart.id},
        include: {product: true}
      });
       
      return {
        id: cart.id,
        items: items
      };
    };

    const createdCart = await prisma.cart.create({data: {}});

    return {
      id: createdCart.id,
      items: [],
    };
  };

}
