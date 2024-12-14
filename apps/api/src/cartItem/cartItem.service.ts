import { Injectable } from "@nestjs/common";
import { prisma } from "@repo/database";

@Injectable()
export class CartItemService {

  async addCartItems(cartItems) {
    console.log("service", cartItems)

    const {cartId, productIds} = cartItems;

    return await prisma.$transaction(
      productIds.map((productId) =>
        prisma.cartItem.upsert({
          where: {id: productId},
          create: {
            cartId: cartId,
            productId
          },
          update: {}
        })
      )
    );
  }
}
