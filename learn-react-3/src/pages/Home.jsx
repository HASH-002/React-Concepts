import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/*
    * The order does not matter in the useQuery function, while retunring the data.
    * So you can write {error, refetch .. } or anything else.
    * refetch is beautiful function which will recall the useQuery and reload the data.
*/
export const Home = () => {
    const { data, isLoading, error, refetch } = useQuery(["cat"], () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (error) { <h1>Something went wrong</h1>; }
    if (isLoading) { <h1>Loading...</h1>; }

    return (
        <div>
            <button onClick={refetch}>Generate Fact</button>
            <h1>{data?.fact}</h1>
        </div>
    );
};
