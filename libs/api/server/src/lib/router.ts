import { publicProcedure, router } from './trpc';
import ENDPOINTS from './endpoints.constant';
import { IFilm, IRequestResult, IRequestError } from './swapi';
import movies from './mocks/movies.mock';

export const appRouter = router({
  getFilms: publicProcedure.query<IRequestResult<IFilm> | IRequestError>(async () => {
    try {
      const response = await fetch(ENDPOINTS.films);

      const res = await response.json();

      return res as IRequestResult<IFilm>;
    } catch (error) {
      console.log('error:', error)
      return {
        error: true,
        msg: 'Error fetching'
      };
    }
  }),
  getMovies: publicProcedure.query(() => {
    return movies;
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
