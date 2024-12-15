import { baseUrl } from "..";
import { CartResponse } from "./types";

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
};