'use client'
import { useEffect, useState } from "react"
import { Product, ProductsResponse } from "../../../api/types"
import TableRow from "../../cells/TableRow"
import { useCart } from "../../../context/cartContext"

type ProductSelection = Product & {
  isSelected: boolean
}

export default function ProductList({
  products,
}: {
  products: ProductsResponse,
}) {
  const [selectAll, setSelectAll] = useState(false);
  const [productsSelection, setProductsSelection] = useState<ProductSelection[]>([]);
  const { cart, addToCart } = useCart();
  
  useEffect(() => {
    setProductsSelection(
      products.map((product) => ({...product, isSelected: false}))
    )
  }, [products]);

  const handleToggleAll = () => {
    setProductsSelection(productsSelection.map((product) => ({...product, isSelected: !selectAll})))
    setSelectAll(!selectAll);
  };
  
  const handleDeselectAll = () => {
    setProductsSelection(productsSelection.map((product) => ({...product, isSelected: false})))
    setSelectAll(false);
  };

  const handleToggleItem = (id: string) => {
    setProductsSelection(
      productsSelection.map((p) => ({
        ...p,
        isSelected: p.id === id ? !p.isSelected : p.isSelected,
      })
    ))
  };

  const handleAddCart = () => {
    const selectedProducts = productsSelection
      .filter((p) => p.isSelected)
      .map((p) => p.id)
    if(cart.id && selectedProducts.length){
      addToCart({
        cartId: cart.id,
        productIds: selectedProducts
      })
      handleDeselectAll();
    }
  }

  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto w-3/4">
        <button
          className="btn btn-primary w-full my-2"
          onClick={handleAddCart}
          disabled={!cart.id}
        >
          Add to cart
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectAll}
                    onChange={handleToggleAll}
                  />
                </label>
              </th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productsSelection
              .sort((a, b) => {
                return a.type > b.type ? 1 : -1
              })
              .map((product) => (
                <TableRow
                  key={product.id}
                  product={product}
                  handleToggleItem={handleToggleItem}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}