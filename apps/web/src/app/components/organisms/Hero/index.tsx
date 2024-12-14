import { HelloResponse } from "../../../api/types"

export default function Hero({
  hello,
}: {
  hello: HelloResponse
}) {
  return (
    <div className="hero bg-base-200 py-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{hello.message}</h1>
          <p className="py-6">
            Welcome to the Yardzen store! Please, choose the products you want to buy and press "Add to cart" button.
          </p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  )
}