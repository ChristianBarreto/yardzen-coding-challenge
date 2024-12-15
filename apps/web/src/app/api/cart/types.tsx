import { Product } from "../products/types";

export type CartItemResponse = {
  id: string,
  productId: string
  cartId: string,
  product: Product,
};

export type CartResponse = {
  id: string,
  items: CartItemResponse[]
};

export type CartItemsPost = {
  cartId: string,
  productIds: string[]
};