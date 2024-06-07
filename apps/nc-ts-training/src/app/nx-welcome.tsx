import { apiClient } from "@api/client-lib";

export function NxWelcome() {
  const moviesQuery = apiClient.getMovies.useQuery();
  const movies = moviesQuery.data;

  if (!movies) {
    return 'Loading!';
  }

  return (
    <>
        {movies.map(movie => <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>)}
    </>
  );
}

export default NxWelcome;
