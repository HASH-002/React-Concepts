import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCat = () => {
    const { data, refetch } = useQuery(["cat"], () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });
    const refetchData = () => {
        alert('Data Refetched');
        refetch();
    };
    return { data, refetchData };
};