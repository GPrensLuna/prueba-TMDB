/* eslint-disable @typescript-eslint/naming-convention */
"use client";

const API_BACKEND = process.env.NEXT_PUBLIC_API_BACKEND;
export const apiClient = {
  favoriteList: {
    update: (currentFavorites: number[], id: number): number[] => {
      const updatedFavorites = currentFavorites.includes(id)
        ? currentFavorites.filter((movieId) => movieId !== id)
        : [...currentFavorites, id];

      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    },
    fetchFavorites: (): number[] => {
      const storedFavorites = localStorage.getItem("favoriteMovies");
      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (
          Array.isArray(parsedFavorites) &&
          parsedFavorites.every((id) => typeof id === "number")
        ) {
          return parsedFavorites;
        }
      }

      return [];
    },
  },

  favorite: {
    post: async (id: number): Promise<void> => {
      const response = await fetch(`${API_BACKEND}/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId: id }),
      });

      if (!response.ok) {
        throw new Error("Error al agregar a favoritos");
      }
    },

    get: async (): Promise<number[]> => {
      const response = await fetch(`${API_BACKEND}/favorites`);

      if (!response.ok) {
        throw new Error("Error al obtener favoritos");
      }

      const favorites: number[] = await response.json();
      return favorites;
    },

    update: async (id: number, data: object): Promise<void> => {
      const response = await fetch(`${API_BACKEND}/favorites/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Error al actualizar favoritos");
      }
    },
  },
};
