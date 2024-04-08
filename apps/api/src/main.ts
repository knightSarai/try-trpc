import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from '@try-trpc/server';
import cors from 'cors';


createHTTPServer({
    middleware: cors(),
    router: appRouter
}).listen(3000);
