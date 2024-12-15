import { getProducts } from "./api/products";
import { getHello } from "./api/hello";
import Hero from "./components/organisms/Hero";
import ProductList from "./components/organisms/ProductList";
import StoreTemplate from "./templates/StoreTamplate";

export default async function Home() {
  const hello = await getHello();
  const products = await getProducts();
  
  return (
    <main>
      <StoreTemplate>
        <Hero hello={hello} />
        <ProductList products={products} />
      </StoreTemplate>
    </main>
  );
}
