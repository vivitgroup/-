import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cartContext";
import { FavoritesProvider } from "@/lib/favoritesContext";

export const metadata: Metadata = {
  title: "Bin Siddiq Fabric — Premium Quality Fabrics",
  description: "Bin Siddiq Fabric — Premium quality upholstery and curtain fabrics since 1942.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <CartProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
