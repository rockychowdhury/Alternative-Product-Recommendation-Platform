import { Link } from "react-router";
import notfound from '../../assets/404-not-found.png'
const NotFoundErrorPage = () => {
    return (
        <div className="grid h-screen place-content-center px-4 text-center">
            <img className="w-96" src={notfound} alt="" />
            <h1 className="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
            <Link className="border mt-2 px-4 py-2 rounded-xl bg-action text-white font-bold" to='/'>Back to Home</Link>
        </div>
    );
};

export default NotFoundErrorPage;