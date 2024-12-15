import { CartItemResponse, CartItemsPost, CartResponse, HelloResponse, ProductsResponse } from "./types";

const baseUrl = "http://localhost:3333";

export async function getHello(): Promise<HelloResponse> {
  try {
    const response = await fetch(`${baseUrl}/hello`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching hello:", error);
    return {
      message: "Error fetching message",
      stats: { products: 0, carts: 0 },
    };
  }
}

export async function getProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch(`${baseUrl}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getCart(): Promise<CartResponse | undefined> {
  try {
    const response = await fetch(`${baseUrl}/cart`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return undefined;
  }
}

export async function addProductsToCart(cartItems: CartItemsPost): Promise<void> {
  console.log('START POST', cartItems)
  try {
    const response = await fetch(`${baseUrl}/cartItem`,{
      method: "post",
      body: JSON.stringify(cartItems),
      headers: {'Content-Type': 'application/json'}
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
