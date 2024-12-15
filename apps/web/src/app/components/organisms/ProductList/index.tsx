'use client'
import { useEffect, useState } from "react"
import { Product, ProductsResponse } from "../../../api/products/types"
import TableRow from "../../cells/TableRow"
import { useCart } from "../../../context/cartContext"
import { getProducts } from "../../../api/products"

type ProductSelection = Product & {
  isSelected: boolean
}

export default function ProductList() {
  const [products, setProducts] = useState<ProductsResponse>([]);
  const [search, setSearch] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [productsSelection, setProductsSelection] = useState<ProductSelection[]>([]);
  const { cart, addToCart } = useCart();
  
  useEffect(() => {
    const queryString = `?name=${search}&orderBy[type]=asc`; // Note: This query string can be improved using 'qs'
    const handler = setTimeout(() => getProducts(queryString).then((res) => {
      setProducts(res)
    }), 400); // NOTE: added a timeout here to avoid too many requests

    return () => clearTimeout(handler);
  }, [search]);

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
        <label className="input input-bordered flex items-center gap-2 my-2">
          <input type="text" className="grow " placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        <button
          className="btn btn-primary my-2 w-full"
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
              }) // Note: Once the prisma does not support sort enum like string, I left this FE sort here, but it's also implemented on BE.
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