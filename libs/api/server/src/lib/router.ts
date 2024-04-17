import { publicProcedure, router } from './trpc';
import ENDPOINTS from './endpoints.constant';
import { IFilm } from './swapi';

export const appRouter = router({
  getFilms: publicProcedure.query<IFilm[]>(async () => {
    console.log('getFilms 1:')
    try {
      const response = await fetch(ENDPOINTS.films);

      const result = await response.json();

      return result;
    } catch (error) {
      console.log('error:', error)
      return {
        error: true
      };
    }
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
