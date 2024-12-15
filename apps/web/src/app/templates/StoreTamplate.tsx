import { CartResponse } from "../api/types"
import Navbar from "../components/organisms/Navbar"

export default function StoreTemplate({
  children,
  cart,
}: {
  children: React.ReactNode
  cart: CartResponse | undefined
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}