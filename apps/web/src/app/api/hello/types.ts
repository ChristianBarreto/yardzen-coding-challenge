export type HelloResponse = {
  message: string;
  stats: {
    products: number;
    carts: number;
  };
};