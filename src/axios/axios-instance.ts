import axios from "axios";

const createAxiosInstance = (token?: string | null) => {
    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Credentials": "true",
        },
    });

    // Add a request interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default createAxiosInstance;
