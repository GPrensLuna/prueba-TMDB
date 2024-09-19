import type { Genres, Movie, Result } from "./typescript";

const API_BACKEND = process.env.NEXT_PUBLIC_API_BACKEND;

if (!API_BACKEND) {
  throw new Error("API base URL is missing");
}

export const api = {
  fetchDataMovie: async ({
    endpoint,
  }: {
    endpoint: string;
  }): Promise<Result> => {
    const res = await fetch(`${API_BACKEND}${endpoint}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Result = await res.json();

    return data;
  },
  fetchDataMovieAll: async (): Promise<
    { title: string; movies: Movie[]; total_pages?: number }[]
  > => {
    const categories = [
      { id: 0, endpoint: "popular" },
      { id: 1, endpoint: "now_playing" },
      { id: 2, endpoint: "top_rated" },
      { id: 3, endpoint: "upcoming" },
    ];

    const randomPage = Math.floor(Math.random() * 10) + 1;
    const res = await Promise.all(
      categories.map((category) => {
        return api.fetchDataMovie({
          endpoint: `/movies/${category.endpoint}?page=${randomPage}`,
        });
      }),
    );
    const moviesData = categories.map((category) => ({
      total_pages: res[category.id]?.total_pages,
      title:
        category.endpoint.charAt(0).toUpperCase() +
        category.endpoint.slice(1).replace("_", " "),
      movies: res[category.id]?.results || [],
    }));

    return moviesData;
  },
  fetchGenres: async (): Promise<Genres> => {
    const res = await fetch(`${API_BACKEND}/movies/genres`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Genres = await res.json();
    return data;
  },
};
