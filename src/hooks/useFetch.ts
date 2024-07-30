import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import createAxiosInstance from "@/axios/axios-instance.ts";

function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [cookies] = useCookies(['user']);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const axiosInstance = createAxiosInstance(cookies.user?.token || null);
                if (url === '/me' && !cookies.user?.token) {
                    return
                }
                const response: AxiosResponse<T> = await axiosInstance.get(url);
                setData(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, cookies.user?.token]);

    return { data, loading, error };
}

export default useFetch;