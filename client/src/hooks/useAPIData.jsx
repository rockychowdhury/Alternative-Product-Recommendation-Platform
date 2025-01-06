import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAPIData = ({ API }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const response = await axiosSecure.get(API);
                setData(response.data);
            } catch (err) {
                setError(err.message || "Something went wrong!");
            } finally {
                setLoading(false);
            }
        };

        if (API) {
            loadData();
        }
    }, [API,axiosSecure]);

    return { data, loading, error };
};

export default useAPIData;
