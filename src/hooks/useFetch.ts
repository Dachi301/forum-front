import {useState, useEffect} from "react";
import {AxiosResponse} from "axios";
import axiosInstance from "@/axios/axios-instance.ts";

function useFetch<T>(url: string): any {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response: AxiosResponse<T> = await axiosInstance.get(url);
                setData(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
}

export default useFetch;
