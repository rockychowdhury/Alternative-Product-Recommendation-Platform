import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
const HomeButton = () => {
    return (
        <div>
            <Link
                to="/"
                className="font-poppins flex items-center gap-2 font-bold text-lg bg-action w-fit px-5 py-2 rounded-full backdrop-blur-md bg-opacity-30 shadow-lg hover:bg-opacity-50 transition-all"
            >
                Back to Home <FaArrowRight />
            </Link>
        </div>

    );
};

export default HomeButton;