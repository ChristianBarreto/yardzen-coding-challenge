export type HelloResponse = {
  message: string;
  stats: {
    products: number;
    carts: number;
  };
};

export type Product = {
  id: string,
  name: string,
  price: number,
  type: string,
  cartItems: string,
};

export type ProductsResponse = Product[];

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