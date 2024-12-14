import Navbar from "./components/organisms/Navbar";
import { getCart, getHello, getProducts } from "./api";
import Hero from "./components/organisms/Hero";
import ProductList from "./components/organisms/ProductList";

export default async function Home() {
  const hello = await getHello();
  const products = await getProducts();
  const cart = await getCart();
  
  const cartId = cart[0].id;
  console.log("Cart ID", cartId)

  return (
    <main>
      <Hero hello={hello} />
      <ProductList products={products} cartId={cartId} />
    </main>
  );
}
