import { baseUrl } from "..";
import { ProductsResponse } from "./types";

export async function getProducts(query?: any): Promise<ProductsResponse> {
  try {
    const response = await fetch(`${baseUrl}/products${query  ? `${query}` : ''}`); // NOTE: here we normally use qs.stringfy() to compose the query params
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}