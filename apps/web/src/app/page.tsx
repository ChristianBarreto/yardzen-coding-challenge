import { getHello, getProducts } from "./api";

export default async function Home() {
  const data = await getHello();
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold">{data.message}</h1>
      <div className="flex gap-8 text-xl">
        <p>Products: {data.stats.products}</p>
        <p>Carts: {data.stats.carts}</p>
        
        <p>Product list:</p>
        {products.map((product) => (
          <p>- {product.name}</p>
        ))}
      </div>
    </main>
  );
}
