'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CartItemsPost, CartResponse } from "../api/cart/types";
import { addProductsToCart, getCart } from "../api/cart";

const initCart: CartResponse = {
  id: '',
  items: [],
};

type CartContexType = {
  cart: CartResponse,
  addToCart: (action: CartItemsPost) => void;
};

const CartContext = createContext({} as CartContexType);

export function CartProvider({
  children
}: {
  children: ReactNode
}) {
  const [cart, setCart] = useState<CartResponse>(initCart);

  const addToCart = (cartItems: CartItemsPost) => {
    addProductsToCart(cartItems).then(() => {
      getCart().then((res) => {
        if (res){
          setCart(res)
        }
      });
    });
  };

  useEffect(() => {
    getCart().then((res) => {
      if (res){
        setCart(res)
      }
    });
  }, []);
  
  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
};