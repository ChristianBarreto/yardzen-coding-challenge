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
    <div className="hidden sm:block">
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
    

  )
}