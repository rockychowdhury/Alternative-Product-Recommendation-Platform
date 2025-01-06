import PropTypes from "prop-types";
import { formatDistanceToNow } from "../../utils/formatTimestamp";

const QueryDetails = ({ query }) => {
    const {
        productName,
        productBrand,
        ProductImageURL,
        title,
        user,
        createdAt,
        recommendationCount,
        boycottingReason,

    } = query;
    const creationTime = formatDistanceToNow(createdAt);
    return (
        <div className=" p-6 bg-white rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
            <div className="relative overflow-hidden rounded-lg">
                <img
                    src={ProductImageURL}
                    alt={productName}
                    className="w-full lg:h-96 object-contain object-center rounded-md shadow-md"
                />
            </div>
            <div className="mt-6 space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Product Name: <span className="font-normal text-gray-600">{productName}</span>
                    </h3>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Product Brand: <span className="font-normal text-gray-600">{productBrand}</span>
                    </h3>
                </div>
                <div>
                    <p className="text-lg font-semibold text-gray-700">
                        Boycotting Reason:{" "}
                        <span className="font-normal text-red-500">{boycottingReason}</span>
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Created By: <span className="font-normal text-gray-600">{user?.name}</span>
                    </h3>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Created At: <span className="font-normal text-gray-600">{creationTime}</span>
                    </h3>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Recommendations:{" "}
                        <span className="font-normal text-green-500">{recommendationCount}</span>
                    </h3>
                </div>
            </div>
        </div>

    );
};
QueryDetails.propTypes = {
    query: PropTypes.object,
}
export default QueryDetails;