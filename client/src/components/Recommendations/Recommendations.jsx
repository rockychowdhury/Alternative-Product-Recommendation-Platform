import PropTypes from "prop-types";
import NoDataFound from "../common/NoDataFound";
import AddRecoButton from '../buttons/AddRecoButton';
import { useState, useEffect } from "react";
import AddRecommendation from "./AddRecommendation";
import useAPIData from "../../hooks/useAPIData";
import Recommendation from "./Recommendation";
const Recommendations = ({ query }) => {
    const [recommender, setRecommender] = useState(false);
    const [recommendations, setRecommendations] = useState([])
    const { data, loading, error } = useAPIData({ API: `/recommendations/${query?._id}` });
    const message = <div>
        <h1 className="text-lg font-bold">It looks like there are no recommendations yet! 🧐</h1>
        <p className="font-poppins text-pretty text-sm text-zinc-700">Be the first to share your valuable insights and help others make informed decisions. 💡 Click the button below to add your recommendation and make a difference!</p>
    </div>

    useEffect(() => {
        if (!loading && !error)
            setRecommendations(data)
    }, [data, loading, error]);

    return (
        <div className="space-y-5">
            <div className="flex justify-end pt-5 me-5">
                {
                    recommendations.length!==0&&<button onClick={() => setRecommender(!recommender)}><AddRecoButton></AddRecoButton></button>
                }
            </div>
            <div className="w-fit mx-auto">
                {
                    recommender && <AddRecommendation query={query} setRecommender={setRecommender}></AddRecommendation>
                }
            </div>
            <div>
                {
                    recommendations.length ?
                        <div className="grid grid-cols-2 gap-4 p-5">
                            {
                                recommendations.map((recommendation) => <Recommendation key={recommendation._id} recommendation={recommendation}></Recommendation>)
                            }
                        </div> :
                        recommender ||
                        <div><NoDataFound message={message}>
                            <button onClick={() => setRecommender(!recommender)}><AddRecoButton></AddRecoButton></button>
                        </NoDataFound></div>
                }
            </div>
        </div>
    );
};
Recommendations.propTypes = {
    query: PropTypes.object,
}
export default Recommendations