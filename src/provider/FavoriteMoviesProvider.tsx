"use client";
import { apiClient } from "@/apiClient";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Movie } from "../typescript";

interface FavoriteMoviesContextType {
  favoriteMovies: number[];
  toggleFavorite: (id: Movie["id"]) => void;
}

const FavoriteMoviesContext = createContext<
  FavoriteMoviesContextType | undefined
>(undefined);

export const FavoriteMoviesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie["id"][]>([]);

  useEffect(() => {
    const initialFavorites = apiClient.favoriteList.fetchFavorites();
    setFavoriteMovies(initialFavorites);
  }, []);

  const toggleFavorite = (id: Movie["id"]): void => {
    setFavoriteMovies((prev) => apiClient.favoriteList.update(prev, id));
  };

  const value = useMemo(
    () => ({ favoriteMovies, toggleFavorite }),
    [favoriteMovies],
  );

  return (
    <FavoriteMoviesContext.Provider value={value}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};

export const useFavoriteMovies = (): FavoriteMoviesContextType => {
  const context = useContext(FavoriteMoviesContext);
  if (!context) {
    throw new Error(
      "useFavoriteMovies must be used within a FavoriteMoviesProvider",
    );
  }

  return context;
};
