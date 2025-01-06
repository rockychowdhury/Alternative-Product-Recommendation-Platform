import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useDeleteData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();
    const deleteData = async (API) => {
        try {
            setLoading(true);
            setError(null);
            const res = await axiosSecure.delete(API);
            return res.data;
        } catch (err) {
            setError(err.message || "Failed to post data.");
        } finally {
            setLoading(false);
        }
    };

    return { deleteData, loading, error };
};

export default useDeleteData;
