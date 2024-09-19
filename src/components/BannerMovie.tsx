"use client";
import { useRef, useState } from "react";
import type { Movie } from "../typescript";
import { ItemsMovie } from "./ItemsMovie";
import ScrollButton from "./ScrollButton";

interface BannerMovieProps {
  title: string;
  movies: Movie[];
  totalPages?: number;
}

const BannerMovie: React.FC<BannerMovieProps> = ({
  title,
  movies,
  totalPages,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const calculatedTotalPages = totalPages
    ? Math.ceil(movies.length / totalPages)
    : 1;

  const scrollLeft = (): void => {
    if (scrollRef.current) {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (): void => {
    if (scrollRef.current) {
      setCurrentPage((prev) => Math.min(prev + 1, calculatedTotalPages - 1));
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const displayedMovies = totalPages
    ? movies.slice(currentPage * totalPages, (currentPage + 1) * totalPages)
    : movies;

  return (
    <article className="overflow-hidden">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="relative">
        <ScrollButton
          direction="left"
          onClick={scrollLeft}
          disabled={currentPage === 0}
        />
        <div
          ref={scrollRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide"
        >
          {displayedMovies.map((movie) => (
            <ItemsMovie key={movie.id} movie={movie} />
          ))}
        </div>
        <ScrollButton
          direction="right"
          onClick={scrollRight}
          disabled={currentPage >= calculatedTotalPages - 1}
        />
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={scrollLeft}
          disabled={currentPage === 0}
          className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Anterior
        </button>
        <span>
          Página {currentPage + 1} de {calculatedTotalPages}
        </span>
        <button
          onClick={scrollRight}
          disabled={currentPage >= calculatedTotalPages - 1}
          className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded ${currentPage >= calculatedTotalPages - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Siguiente
        </button>
      </div>
    </article>
  );
};

export default BannerMovie;
