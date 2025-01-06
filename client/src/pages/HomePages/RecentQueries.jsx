import { useEffect, useState } from "react";
import useAPIData from "../../hooks/useAPIData";
import Query from "../../components/Queries/Query";

const RecentQueries = () => {
    const [queries, setQueries] = useState([]);
    const { data, loading, error } = useAPIData({ API: "/queries?limit=6" });
    useEffect(() => {
        if (!loading && !error)
            setQueries(data)
    }, [data, loading, error]);
    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Recent Queries
                </h2>
                {queries.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {queries.map((query) => (
                            // <div
                            //     key={query._id}
                            //     className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-200"
                            // >
                            //     <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            //         {query.productName}
                            //     </h3>
                            //     {/* <p className="text-gray-600 text-sm mb-4">
                            //         {query.description.substring(0, 100)}...
                            //     </p> */}
                            //     <div className="text-gray-500 text-xs">
                            //         <p>
                            //             <span className="font-medium">Posted By:</span>{" "}
                            //             {query.user.name}
                            //         </p>
                            //         <p>
                            //             <span className="font-medium">Date:</span>{" "}
                            //             {new Date(query.createdAt).toLocaleDateString()}
                            //         </p>
                            //     </div>
                            // </div>
                            <Query key={query._id}  query={query}></Query>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        No queries available at the moment.
                    </p>
                )}
            </div>
        </div>
    );
};

export default RecentQueries;
