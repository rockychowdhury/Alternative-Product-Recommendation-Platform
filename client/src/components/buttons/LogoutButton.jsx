import { MdOutlineLogout } from "react-icons/md";
const LogoutButton = () => {
    return (
        <div className="w-full font-poppins flex items-center gap-2 px-6 py-2 rounded-full hover:text-action font-semibold  border border-white hover:border-action transition">
            <MdOutlineLogout className="text-lg"></MdOutlineLogout>
            <span>Logout</span>
        </div>
    );
};

export default LogoutButton;