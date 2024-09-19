"use client";
import { useFavoriteMovies } from "@/provider/FavoriteMoviesProvider";
import type { Movie } from "../typescript";

const ButtonFavorite = ({ id }: { id: Movie["id"] }): JSX.Element => {
  const { favoriteMovies, toggleFavorite } = useFavoriteMovies();

  return (
    <button
      className="bg-slate-500 text-white rounded-full px-2 py-1"
      onClick={() => toggleFavorite(id)}
    >
      {favoriteMovies.includes(id) ? "❤️" : "🤍"}
    </button>
  );
};

export default ButtonFavorite;
