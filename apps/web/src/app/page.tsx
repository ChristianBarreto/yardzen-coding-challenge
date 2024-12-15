import { getCart, getHello, getProducts } from "./api";
import Hero from "./components/organisms/Hero";
import ProductList from "./components/organisms/ProductList";
import StoreTemplate from "./templates/StoreTamplate";

export default async function Home() {
  const hello = await getHello();
  const products = await getProducts();
  const cart = await getCart();
  
  return (
    <main>
      <StoreTemplate cart={cart}>
        <Hero hello={hello} />
        <ProductList products={products} cartId={cart?.id} />
      </StoreTemplate>
    </main>
  );
}
