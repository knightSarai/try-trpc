import { initTRPC } from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({
  greeting: publicProcedure.query(() => 'Hello World!'),
});

export type AppRouter = typeof appRouter;

createHTTPServer({
  router: appRouter
}).listen(3000);
