import { useState, useEffect } from "react";
import useAPIData from "../../hooks/useAPIData";
import NoDataFound from '../../components/common/NoDataFound';
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const RecommendationsForMePage = () => {
    const [recommendations, setRecommendations] = useState([]);
    const { user } = useAuth();
    const { data, loading, error } = useAPIData({ API: '/recommendations-for-me' });
    useEffect(() => {
        if (!loading && !error)
            setRecommendations(data)
    }, [data, loading, error]);
    const message = <div>
        <p className="font-bold text-pretty text-xl text-zinc-950">{`No Recommendations Received Yet, ${user.displayName.split(" ")[0]}! 🤗`}</p>
        <p className="font-medium text-pretty text-zinc-600">Why not explore and engage with other&apos;s queries? It’s a great way to spark conversations and invite helpful recommendations your way! 🛠️✨</p>
    </div>;
    return (
        <div className="h-screen">
            <div className="overflow-x-auto scrollbar-custom">
                {
                    recommendations.length ?
                        <div className="overflow-x-auto rounded-lg border text-center border-gray-200">
                            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                <thead className="ltr:text-left rtl:text-right">
                                    <tr>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Query Title</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Query Product</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Recommended Product</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Reason</th>
                                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Recommender</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        recommendations.map((recommendation) => (
                                            <tr key={recommendation._id}>
                                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{recommendation.query.title}</td>
                                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{recommendation.query.product}</td>
                                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{recommendation.recommendedProductName},{recommendation.recommendedProductBrand}</td>
                                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{recommendation.recommendationReason}</td>
                                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{recommendation.user.name}</td>
                                            </tr>

                                        ))
                                    }
                                </tbody>
                            </table>
                        </div> :
                        <div>
                            <NoDataFound message={message}>
                                <Link to="/queries" className="w-full font-semibold font-poppins bg-gradient-to-r from-action to-pink-500 border-action border text-white px-4 p-2 rounded-full hover:shadow-md  hover:to-purple-500 hover:from-20% group transition">
                                    Explore Recommendations
                                </Link>
                            </NoDataFound>
                        </div>
                }

            </div>
        </div>
    );
};

export default RecommendationsForMePage;