import { useGetCat } from "../useGetCat";

export const Cat = () => {
    const { data, refetchData } = useGetCat();
    return (
        <>
            <button onClick={refetchData}>Generate Fact</button>
            <h1>{data?.fact}</h1>
        </>
    );
};