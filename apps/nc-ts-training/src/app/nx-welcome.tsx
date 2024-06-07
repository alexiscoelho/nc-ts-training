import { apiClient } from "@api/client-lib";

export function NxWelcome() {

  const filmsQuery = apiClient.getFilms.useQuery();
  const results = filmsQuery.data?.results;

  if (!results) {
    return 'Loading!';
  }

  return (
    <>
        {results.map(film => <div>
          <h2>{film.title}</h2>
          <p>{film.producer}</p>
        </div>)}
    </>
  );
}

export default NxWelcome;
