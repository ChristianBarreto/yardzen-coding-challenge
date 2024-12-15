'use client'
import { createContext, ReactNode, Reducer, useContext, useEffect, useReducer, useState } from "react";
import { CartItemResponse, CartItemsPost, CartResponse, Product } from "../api/types";
import { addProductsToCart, getCart } from "../api";

type ACTIONTYPE =
  | { type: "add"; cart: CartItemsPost }

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
      })
    })
  }

  useEffect(() => {
    getCart().then((res) => {
      if (res){
        setCart(res)
      }
    })
    
  }, [])
  
  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
}

// function CartReducer(cartItems: CartItemsPost, action: ACTIONTYPE): CartResponse {
//   switch(action.type) {
//     case 'add': {
//       console.log("XXX", cartItems, action)
//       addProductsToCart({
//         cartId: action.cart.cartId,
//         productIds: action.cart.productIds
//       })
//     }
//     default: {
//       return {
//         id: cartItems.cartId,
//         items: []
//       };
//     }
//   }
// } 
