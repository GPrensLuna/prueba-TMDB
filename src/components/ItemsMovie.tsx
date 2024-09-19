/* eslint-disable @typescript-eslint/naming-convention */
import dynamic from "next/dynamic";
import Image from "next/image";
import type { Movie } from "../typescript";

const ButtonFavorite = dynamic(() => import("./ButtonFavorite"), {
  ssr: false,
});

export const ItemsMovie = ({ movie }: { movie: Movie }): JSX.Element => {
  return (
    <li className="min-w-40 h-80 bg-slate-500 rounded-xl grid justify-center overflow-hidden border-black border-2">
      <section className="w-40 relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          loading="lazy"
          placeholder="blur"
          aria-label={`${movie.title} backdrop`}
          blurDataURL={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        />
      </section>
      <p className="text-xs px-4">{movie.title}</p>
      <span>
        <ButtonFavorite id={movie.id} />
      </span>
    </li>
  );
};
