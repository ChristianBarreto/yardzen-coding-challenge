import { HelloResponse, ProductsResponse } from "./types";

export async function getHello(): Promise<HelloResponse> {
  try {
    const response = await fetch("http://localhost:3333/hello");
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
    const response = await fetch("http://localhost:3333/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
