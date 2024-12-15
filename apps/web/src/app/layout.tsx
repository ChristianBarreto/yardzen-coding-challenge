export const metadata = {
  title: "Next.js App",
  description: "Generated by Next.js",
};

import './globals.css';
import Navbar from './components/organisms/Navbar';
import { CartProvider, useCart } from './context/cartContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        <CartProvider >
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
