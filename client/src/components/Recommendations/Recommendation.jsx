
import { formatDistanceToNow } from '../../utils/formatTimestamp';
import PropTypes from 'prop-types';

const Recommendation = ({ recommendation }) => {
    const {
        recommendedProductName,
        recommendedProductBrand,
        recommendedProductImageURL,
        recommendationTitle,
        recommendationReason,
        user,
        createdAt,
    } = recommendation;
    const creationTime = formatDistanceToNow(createdAt);
    return (
        <div className="max-w-md col-span-1 bg-white relative rounded-lg shadow-md overflow-hidden">

            {/* <div className={`absolute border-action  rounded-bl-md bg-action ${personal ? 'visible' : 'invisible'}  text-white p-1 top-0 right-0 text-2xl`}>
                <PiDotsThreeOutlineVerticalFill></PiDotsThreeOutlineVerticalFill>
            </div> */}
            <img src={recommendedProductImageURL} alt={recommendationTitle} className="w-full rounded-t-xl object-center h-56 object-cover" />

            <div className="p-4 space-y-3">
                <h2 className="text-lg font-semibold text-gray-700">{recommendationTitle}</h2>
                <h2 className="text-lg font-semibold text-zinc-950">Reason : {recommendationReason}</h2>

                <p className="text-sm text-gray-600 mt-1">
                    {recommendedProductName} | {recommendedProductBrand}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <img
                            src={user?.photo ? user.photo : 'https://via.placeholder.com/40'}
                            alt={user.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700">{user.name}</p>
                            <p className="text-xs text-gray-500">{creationTime}</p>
                        </div>
                    </div>
                </div>

                {/* <div className="flex items-center justify-between mt-4">

                    <Link to={`/queries/${query._id}`}><ViewDetailsButton></ViewDetailsButton></Link>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center text-gray-600">
                            <FaThumbsUp className="w-5 h-5 mr-1" />
                            <span>{recommendationCount}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaCommentAlt className="w-5 h-5 mr-1" />
                            <span>{commentsCount}</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};
Recommendation.propTypes = {
    recommendation: PropTypes.object,
}
export default Recommendation;
