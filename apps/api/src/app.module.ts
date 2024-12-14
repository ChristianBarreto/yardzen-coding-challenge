import { Module } from "@nestjs/common";
import { HelloModule } from "./hello/hello.module";
import { ProductModule } from './product/product.module'

@Module({
  imports: [HelloModule, ProductModule],
})
export class AppModule {}
