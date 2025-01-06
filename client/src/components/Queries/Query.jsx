import { FaThumbsUp, FaCommentAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "../../utils/formatTimestamp";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import ViewDetailsButton from '../buttons/ViewDetailsButton';
import { Link, useNavigate } from "react-router";
import DeleteButton from '../buttons/DeleteButton';
import UpdateButton from '../buttons/UpdateButton';
import CancelButton from "../buttons/CancelButton";
import useUIContext from "../../hooks/useUIContext";
import useDeleteData from "../../hooks/useDeleteData";
import { useState } from "react";

const Query = ({ query, personal = false }) => {
    const { showToast } = useUIContext();
    const { deleteData } = useDeleteData();
    const navigate = useNavigate();
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const {
        productName,
        productBrand,
        ProductImageURL,
        title,
        user,
        createdAt,
        recommendationCount,
        commentsCount = 0,
    } = query;
    const creationTime = formatDistanceToNow(createdAt);

    const handleDeleteQuery = async (id, confirmation) => {
        if (!confirmation) {
            setDeleteConfirmation(true);
        }
        if (id && confirmation) {
            // console.log("delete", id);
            const data = await deleteData(`/queries/${id}`);
            if (data.deletedCount === 1) {
                showToast('success', "Query Deleted");
                setDeleteConfirmation(false);
                navigate(0);
            }
            // console.log(data);

        }
    }


    return (
        <div className="max-w-md col-span-1 bg-white relative rounded-lg shadow-md ">
            <div className="group relative ">
                <div className={`absolute border-action rounded-tr-md rounded-bl-md bg-action ${personal ? 'visible' : 'invisible'}  text-white p-1 top-0 right-0 text-2xl`}>
                    <PiDotsThreeOutlineVerticalFill></PiDotsThreeOutlineVerticalFill>
                </div>
                <div className=" absolute -right-32 rounded-xl z-50 group-hover:block bg-marble top-3 w-fit p-5 hidden">
                    {
                        deleteConfirmation ? <div className="space-y-4 space-x-4">
                            <p className="text-rose-500 font-semibold text-pretty">Are you sure you?</p>
                            <button onClick={() => handleDeleteQuery(query._id, true)}><DeleteButton></DeleteButton></button>
                            <button onClick={() => setDeleteConfirmation(false)}><CancelButton></CancelButton></button>
                        </div> :
                            <div className="flex flex-col gap-4  ">
                                <Link to={`update/${query._id}`} > <UpdateButton></UpdateButton></Link>
                                <button onClick={() => { handleDeleteQuery(query._id, false) }}><DeleteButton></DeleteButton></button>
                            </div>
                    }
                </div>
            </div>
            <img src={ProductImageURL} alt={title} className="w-full rounded-t-xl object-center h-56 object-cover" />

            <div className="p-4">
                <h2 className="text-lg min-h-14 font-semibold text-gray-800">{title}</h2>

                <p className="text-sm text-gray-600 mt-1">
                    {productName} | {productBrand}
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

                <div className="flex items-center justify-between mt-4">

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
                </div>
            </div>
        </div>
    );
};

Query.propTypes = {
    query: PropTypes.object,
    personal: PropTypes.bool,
}
export default Query;