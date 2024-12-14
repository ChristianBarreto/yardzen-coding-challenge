import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { CartService } from "./cart.service";

@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() {
    return this.cartService.getCart();
  }
}
