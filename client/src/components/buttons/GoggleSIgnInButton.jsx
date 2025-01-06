import { FcGoogle } from "react-icons/fc";
const GoggleSIgnInButton = () => {
    return (
        <div className="flex items-center gap-2 font-semibold text-lg justify-center py-2 rounded-full  bg-action/90 bg-gradient-to-r hover:from-action from-10% hover:to-purple-500 text-white">
            <span className="shadow-lg bg-white rounded-lg p-1"><FcGoogle></FcGoogle></span>
            Continue With Google
        </div>
    );
};

export default GoggleSIgnInButton;