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
