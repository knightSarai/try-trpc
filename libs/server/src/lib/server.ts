import { router, publicProcedure } from './trpc';

export const appRouter = router({
  greeting: publicProcedure.query(() => ({message: 'Hello World! 🌍'})),
});

export type AppRouter = typeof appRouter;
