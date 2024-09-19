import { api } from "@/api";
import { ItemsMovie } from "../../../components/ItemsMovie";
const PagePopular = async (): Promise<JSX.Element> => {
  const { results } = await api.fetchDataMovie({
    endpoint: `/movies/popular?page=1`,
  });
  return (
    <article className="p-4 ">
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
        {results.map((movie) => (
          <ItemsMovie key={movie.id} movie={movie} />
        ))}
      </ul>
    </article>
  );
};

export default PagePopular;
