import { useState, useEffect } from "react";
import useAPIData from "../../hooks/useAPIData";
import { formatDistanceToNow } from "../../utils/formatTimestamp";
import DeleteButton from '../../components/buttons/DeleteButton';
import UserConfirmation from '../../components/common/UserConfirmation';
import useUIContext from "../../hooks/useUIContext";
import CancelButton from '../../components/buttons/CancelButton';
import useDeleteData from "../../hooks/useDeleteData";
import NoDataFound from '../../components/common/NoDataFound';
import { Link } from "react-router";


const MyRecommendationPage = () => {
    const { setOpenModal, showToast } = useUIContext();
    const [recommendations, setRecommendations] = useState([]);
    const [recommendationID, setRecommendationID] = useState();
    const { deleteData } = useDeleteData();
    const { data, loading, error } = useAPIData({ API: '/my-recommendations' });
    useEffect(() => {
        if (!loading && !error)
            setRecommendations(data)
    }, [data, loading, error]);
    const handleDeleteRecommendation = async (id, confirmation) => {
        if (!confirmation) {
            setOpenModal(true);
            setRecommendationID(id);
        }
        if (recommendationID && confirmation) {
            // console.log("delete", recommendationID);
            const data = await deleteData(`/recommendations/${recommendationID}`);
            if (data.deletedCount === 1) {
                const availableRecommendation = recommendations.filter((recommendation) => recommendation._id != recommendationID);
                setRecommendations(availableRecommendation);
                setRecommendationID(null);
            }
            // console.log(data);
            setOpenModal(false);
            showToast('success', "Recommendation Deleted");
        }
    }
    const message = <div>
        <p className="font-bold text-pretty text-xl text-zinc-950">No Recommendations Yet, Rocky! 🤔</p>
        <p className="font-medium text-pretty text-zinc-600">Why not start now? Recommend your favorite products or alternatives and make a difference today! 🛍️✨</p>
    </div>;
    return (
        <div className="h-screen overflow-x-auto">
            <div>
                <UserConfirmation>
                    <div className="space-y-5 py-10">
                        <p className="font-semibold  text-rose-500 text-lg text-pretty">
                            Are you Sure you wanna delete this recommendation?
                        </p>
                        <div className="space-x-5">
                            <button onClick={() => { handleDeleteRecommendation(null, true) }}><DeleteButton></DeleteButton></button>
                            <button onClick={() => setOpenModal(false)}>
                                <CancelButton></CancelButton>
                            </button>
                        </div>
                    </div>
                </UserConfirmation>
                {
                    recommendations.length ? <div className="overflow-x-auto rounded-lg border text-center border-gray-200">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Query Product</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Recommended Product</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">To</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Time</th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    recommendations.map((recommendation) => (
                                        <tr key={recommendation._id}>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{recommendation.query.product}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{recommendation.recommendedProductName},{recommendation.recommendedProductBrand}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{recommendation.user.name}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{formatDistanceToNow(recommendation.createdAt)}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700"><button onClick={() => handleDeleteRecommendation(recommendation._id, false)}> <DeleteButton></DeleteButton> </button></td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div> :
                        <div>
                            <NoDataFound message={message}>
                                <Link to="/queries" className="w-full font-semibold font-poppins bg-gradient-to-r from-action to-pink-500 border-action border text-white px-4 p-2 rounded-full hover:shadow-md  hover:to-purple-500 hover:from-20% group transition">
                                    Add Your First Recommendation
                                </Link>
                            </NoDataFound>
                        </div>

                }

            </div>
        </div>
    );
};

export default MyRecommendationPage;