import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { CartItemService } from "./cartItem.service";

@Controller("cartItem")
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Post()
  addCartItems(@Body() cartItems: any) {
    console.log("controller", cartItems)
    return  this.cartItemService.addCartItems(cartItems);
  }
}
