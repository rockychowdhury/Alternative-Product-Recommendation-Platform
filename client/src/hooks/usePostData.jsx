import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const usePostData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const axiosSecure = useAxiosSecure();
    const postData = async (API, payload) => {
        try {
            setLoading(true);
            setError(null);
            const res = await axiosSecure.post(API, payload);
            setResponse(res.data);
            return res;
        } catch (err) {
            setError(err.message || "Failed to post data.");
        } finally {
            setLoading(false);
        }
    };

    return { postData, loading, error, response };
};

export default usePostData;
