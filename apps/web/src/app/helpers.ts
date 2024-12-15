import { CartItemResponse } from "./api/types";

export const handleCalcTotal = (items: CartItemResponse[]) => {
  return items.reduce((acc: number, curr: CartItemResponse) => {
    return acc + Number(curr.product.price)
  }, 0);
};