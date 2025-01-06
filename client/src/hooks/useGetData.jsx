import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const axiosSecure = useAxiosSecure();

    const getData = async (API) => {
        try {
            setLoading(true);
            setError(null);
            const res = await axiosSecure.get(API);
            setResponse(res.data);
        } catch (err) {
            setError(err.message || "Failed to fetch data.");
        } finally {
            setLoading(false);
        }
    };

    return { getData, loading, error, response };
};

export default useGetData;
