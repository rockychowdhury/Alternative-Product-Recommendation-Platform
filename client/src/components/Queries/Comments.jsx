import AddRecoButton from "../buttons/AddRecoButton";
import NoDataFound from "../common/NoDataFound";

const Comments = () => {
    const comments = 0;
    const message = <div>
        <h1 className="text-lg font-bold">No comments yet! 🤔</h1>
        <p className="font-poppins text-pretty text-sm text-zinc-700">Your thoughts matter! Share your insights, ask questions, or start a conversation to help others learn more. 🗣️ Click below to add your comment and be part of the discussion!</p>
    </div>
    return (
        <div>
            {
                comments ? <h1>comments</h1> : <div className=""><NoDataFound message={message}>
                    <button><AddRecoButton></AddRecoButton></button>
                </NoDataFound></div>
            }
        </div>
    );
};

export default Comments;