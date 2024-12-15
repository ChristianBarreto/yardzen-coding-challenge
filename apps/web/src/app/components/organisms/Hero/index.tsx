import { HelloResponse } from "../../../api/hello/types"

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
            Welcome to Yardzen store! Please, choose the products you want to buy and press "Add to cart" button.
          </p>
          <span className="bg-primary p-4 rounded-lg text-slate-300">
            We have {hello.stats.products} products available
          </span>
        </div>
      </div>
    </div>
  )
}