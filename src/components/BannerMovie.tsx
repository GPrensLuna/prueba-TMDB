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
  totalPages = 1,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const calculatedTotalPages = Math.ceil(movies.length / totalPages);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        direction === "left"
          ? -scrollContainerRef.current.clientWidth
          : scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      if (direction === "left" && currentPage > 0) {
        setCurrentPage((prev) => prev - 1);
      } else if (
        direction === "right" &&
        currentPage < calculatedTotalPages - 1
      ) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  const displayedMovies = movies.slice(
    currentPage * totalPages,
    (currentPage + 1) * totalPages,
  );

  return (
    <article className="overflow-hidden">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="relative w-full">
        <ScrollButton direction="left" onClick={() => scroll("left")} />
        <div
          ref={scrollContainerRef}
          className="flex  max-w-screen space-x-2 overflow-x-hidden scrollbar-hide"
        >
          {displayedMovies.slice(0, 8).map((movie) => (
            <ItemsMovie key={movie.id} movie={movie} />
          ))}
        </div>
        <ScrollButton direction="right" onClick={() => scroll("right")} />
      </div>
    </article>
  );
};

export default BannerMovie;
