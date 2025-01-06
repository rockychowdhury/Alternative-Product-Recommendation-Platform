import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const usePutData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const axiosSecure = useAxiosSecure();

    const putData = async (API, payload) => {
        try {
            setLoading(true);
            setError(null);
            const res = await axiosSecure.put(API, payload);
            setResponse(res.data);
            return res.data;
        } catch (err) {
            setError(err.message || "Failed to update data.");
        } finally {
            setLoading(false);
        }
    };

    return { putData, loading, error, response };
};

export default usePutData;
