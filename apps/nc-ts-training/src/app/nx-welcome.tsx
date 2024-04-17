import { apiClient } from "@api/client-lib";

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {

  const filmsQuery = apiClient.getFilms.useQuery();


  return (
    <>
      <p>{filmsQuery.data ? JSON.stringify(filmsQuery.data) : ''}</p>
    </>
  );
}

export default NxWelcome;
