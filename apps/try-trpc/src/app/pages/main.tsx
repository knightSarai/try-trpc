import { trpc } from '../trpc';


export function MainPage() {
    const greetingQuery = trpc.greeting.useQuery();

    return (
        <div>
            {greetingQuery.data}
        </div>
    )

}
