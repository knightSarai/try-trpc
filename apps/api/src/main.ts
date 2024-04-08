import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from '@try-trpc/server';


createHTTPServer({
  router: appRouter
}).listen(3000);
