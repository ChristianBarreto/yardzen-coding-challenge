import { baseUrl } from "..";
import { HelloResponse } from "./types";

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