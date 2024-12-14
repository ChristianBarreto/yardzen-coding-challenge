'use client'
import { useEffect, useState } from "react"
import { Product, ProductsResponse } from "../../../api/types"
import TableRow from "../../cells/TableRow"
import { addProductsToCart } from "../../../api"

type ProductSelection = Product & {
  isSelected: boolean
}

export default function ProductList({
  products,
  cartId,
}: {
  products: ProductsResponse,
  cartId: string,
}) {
  const [selectAll, setSelectAll] = useState(false);
  const [productsSelection, setProductsSelection] = useState<ProductSelection[]>([]);
  
  useEffect(() => {
    setProductsSelection(
      products.map((product) => ({...product, isSelected: false}))
    )
  }, [products]);

  const handleSelectAll = () => {
    setProductsSelection(productsSelection.map((product) => ({...product, isSelected: !selectAll})))
    setSelectAll(!selectAll);
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
    addProductsToCart({
      cartId: cartId,
      productIds: [products[0].id, products[1].id]
    });
  }

  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto w-3/4">
      <button className="btn btn-primary" onClick={handleAddCart}>Add to cart</button>
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" checked={selectAll} onChange={handleSelectAll}/>
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
                // <tr key={product.id}><td>Prod</td></tr>
                <TableRow key={product.id} product={product} handleToggleItem={handleToggleItem}/>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}