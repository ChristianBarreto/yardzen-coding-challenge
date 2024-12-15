import { baseUrl } from "..";
import { CartItemsPost } from "./types";

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