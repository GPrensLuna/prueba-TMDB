import type { Movie, Result } from "./typescript";

const API_BACKEND = process.env.API_BACKEND;

export const api = {
  fetchDataMovie: async ({
    endpoint,
  }: {
    endpoint: string;
  }): Promise<Result> => {
    if (!API_BACKEND) {
      throw new Error("API base URL is missing");
    }

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
      { id: 1, endpoint: "popular" },
      { id: 2, endpoint: "now_playing" },
      { id: 3, endpoint: "top_rated" },
      { id: 4, endpoint: "upcoming" },
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
      ...(category.endpoint !== "upcoming" && {
        total_pages: res[category.id]?.total_pages,
      }),
      title:
        category.endpoint.charAt(0).toUpperCase() +
        category.endpoint.slice(1).replace("_", " "),
      movies: res[category.id]?.results || [],
    }));

    return moviesData;
  },
};
