export type Product = {
  id: string,
  name: string,
  imgUrl: string,
  price: number,
  type: string,
  cartItems: string,
};

export type ProductsResponse = Product[];