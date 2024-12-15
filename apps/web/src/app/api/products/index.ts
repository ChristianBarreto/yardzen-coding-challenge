import { baseUrl } from "..";
import { ProductsResponse } from "./types";

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