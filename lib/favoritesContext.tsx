"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FavCtx = {
  favorites: string[];
  toggle: (id: string) => void;
  isFav: (id: string) => boolean;
};

const FavContext = createContext<FavCtx | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("bs_favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bs_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggle = (id: string) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  const isFav = (id: string) => favorites.includes(id);

  return (
    <FavContext.Provider value={{ favorites, toggle, isFav }}>
      {children}
    </FavContext.Provider>
  );
}

export const useFavorites = () => {
  const ctx = useContext(FavContext);
  if (!ctx) throw new Error("useFavorites must be inside FavoritesProvider");
  return ctx;
};
