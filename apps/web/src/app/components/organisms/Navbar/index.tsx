'use client'
import { useCart } from "../../../context/cartContext"
import IconCart from "../../atoms/IconCart";
import { useMemo } from "react";
import { handleCalcTotal } from "../../../helpers";

export default function Navbar() {
  const { cart } = useCart();
  const calcTotal = useMemo(() => handleCalcTotal(cart.items), [cart.items]);
  
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Yardzen Store</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IconCart />
              <span className="badge badge-sm indicator-item bg-red-500 text-white">{cart?.items.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{cart?.items.length} Items</span>
              {cart?.items.map((item: any) => (
                <span key={item.id} className="text-gray-400">
                  {item.product.name}
                </span>
              ))}
              <span className="text-info">
                Subtotal: ${ calcTotal.toFixed(2) }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}