
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";
import Spinner from "../components/common/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return <Spinner></Spinner>;
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.any,
}
export default PrivateRoute;