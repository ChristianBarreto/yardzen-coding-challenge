import { Module } from "@nestjs/common";
import { HelloModule } from "./hello/hello.module";
import { ProductModule } from './product/product.module';
import { CartModule } from "./cart/cart.module";
import { CartItemModule } from "./cartItem/cartItem.module";

@Module({
  imports: [HelloModule, ProductModule, CartModule, CartItemModule],
})
export class AppModule {}
