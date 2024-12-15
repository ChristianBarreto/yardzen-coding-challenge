import { Product } from "../../../api/products/types"
import TableRow from "../../molecules/TableRow"

type ProductSelection = Product & {
  isSelected: boolean
}

export default function Table({
  selectAll,
  handleToggleAll,
  productsSelection,
  handleToggleItem
}: {
  selectAll: boolean,
  handleToggleAll: () => void,
  productsSelection: ProductSelection[],
  handleToggleItem: (id: string) => void,
}) {
  return (
    <div className="my-4 sm:hidden">
        {productsSelection
          .sort((a, b) => {
            return a.type > b.type ? 1 : -1
          }) // Note: Once the prisma does not support sort enum like string, I left this FE sort here, but it's also implemented on BE.
          .map((product) => (
            <div
              key={product.id}
              className={`card bg-base-100 shadow-xl md:hidden my-4 ${product.isSelected && "border-2 border-indigo-400 shadow-indigo-100"}`}
              onClick={() => handleToggleItem(product.id)}
            >
              <figure>
                <img
                  src={product.imgUrl}
                  alt={product.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Type: {product.type}</p>
              </div>
            </div>
          ))
        }
    </div>
  )
}