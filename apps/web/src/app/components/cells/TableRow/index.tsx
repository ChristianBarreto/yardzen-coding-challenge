import { Product } from "../../../api/types";

type ProductSelection = Product & {
  isSelected: boolean
}

export default function TableRow({
  product,
  handleToggleItem,
}: {
  product: ProductSelection,
  handleToggleItem: (value: string) => void
}) {
  return (
    <tr className="hover">
      <th>
        <label>
          <input type="checkbox" className="checkbox" name={product.id} checked={product.isSelected} onChange={(e) => handleToggleItem(e.target.name)}/>
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s"
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{product.name}</div>
          </div>
        </div>
      </td>
      <td>
        {product.type}
        <br />
      </td>
      <td>${product.price}</td>
    </tr>
  )
}