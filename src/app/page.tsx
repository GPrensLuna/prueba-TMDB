import { api } from "@/api";
import BannerMovie from "../components/BannerMovie";

const PageHome = async (): Promise<JSX.Element> => {
  const moviesData = await api.fetchDataMovieAll();
  return (
    <>
      {moviesData.map((movies) => (
        <BannerMovie
          key={movies.title}
          title={movies.title}
          movies={movies.movies}
          totalPages={movies.total_pages}
        />
      ))}
    </>
  );
};

export default PageHome;
