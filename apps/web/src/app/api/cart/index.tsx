import { baseUrl } from "..";
import { CartItemsPost, CartResponse } from "./types";

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