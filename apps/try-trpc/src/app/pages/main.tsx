import { trpc } from '../trpc';


export function MainPage() {
    const {data, isLoading} = trpc.greeting.useQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data</div>;
    }

    return (
        <div>
            {data.message}
        </div>
    )

}
