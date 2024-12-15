'use client'
import { useEffect, useState } from "react"
import { Product, ProductsResponse } from "../../../api/products/types"
import TableRow from "../../molecules/TableRow"
import { useCart } from "../../../context/cartContext"
import { getProducts } from "../../../api/products"
import IconSearch from "../../atoms/IconSearch"
import Table from "../../cells/Table"
import Cards from "../../cells/Cards"

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
      <div className="overflow-x-auto w-3/4 p-2">
        <div className="flex flex-wrap gap-2">
          <label className="input input-bordered flex items-center gap-2 my-2 grow">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconSearch />
          </label>
          <button
            className="btn btn-primary my-2 grow md:w-2"
            onClick={handleAddCart}
            disabled={!cart.id}
          >
            Add to cart
          </button>
        </div>
        <Table
          selectAll={selectAll}
          handleToggleAll={handleToggleAll}
          productsSelection={productsSelection}
          handleToggleItem={handleToggleItem}
        />
        <Cards
          selectAll={selectAll}
          handleToggleAll={handleToggleAll}
          productsSelection={productsSelection}
          handleToggleItem={handleToggleItem}
        />
      </div>
    </div>
  )
}