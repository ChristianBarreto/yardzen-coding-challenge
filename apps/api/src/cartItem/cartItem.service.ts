import { Injectable } from "@nestjs/common";
import { prisma } from "@repo/database";

@Injectable()
export class CartItemService {

  async addCartItems(cartItems) {
    const {cartId, productIds } = cartItems;

    return await prisma.$transaction(
      productIds.map((pId: string) =>
        prisma.cartItem.upsert({
          where: {productId: pId},
          create: {
            cartId: cartId,
            productId: pId
          },
          update: {}
        })
      )
    );
  };

}
