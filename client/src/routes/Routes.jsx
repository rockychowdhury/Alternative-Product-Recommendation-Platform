import { createBrowserRouter, RouterProvider } from "react-router";
import CommonLayout from "../layouts/CommonLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundErrorPage from "../pages/ErrorPages/NotFoundErrorPage";
import LoginPage from "../pages/AuthPages/LoginPage";
import RegistrationPage from "../pages/AuthPages/RegistrationPage";
import MyQueriesPage from "../pages/QueriesPages/MyQueriesPage";
import PrivateRoute from "./PrivateRoute";
import QueriesPage from "../pages/QueriesPages/QueriesPage";
import QueryDetailsPage from "../pages/QueriesPages/QueryDetailsPage";
import axios from "axios";
import MyRecommendationPage from '../pages/RecommendationPages/MyRecommendationPage';
import RecommendationsForMePage from '../pages/RecommendationPages/RecommendationsForMePage';
import { API } from "../utils/API";
import UpdateQuery from "../components/Queries/UpdateQuery";
import HomePage from "../pages/HomePages/HomePage";

const queryDetailsLoader = async ({ params }) => {
    const { id } = params;
    try {
        const res = await axios.get(`${API}/queries/${id}`, {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        throw new Response("Failed to load query details", { status: error.response?.status || 500 });
    }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: "my-queries",
                element: <PrivateRoute><MyQueriesPage /></PrivateRoute>,
            },
            {
                path: "queries",
                element: <QueriesPage />,
            },
            {
                path: "queries/:id",
                element: <QueryDetailsPage />,
                loader: queryDetailsLoader,
            },
            {
                path: "my-queries/update/:id",
                element: <UpdateQuery />,
                loader: queryDetailsLoader,
            },
            {
                path: "my-recommendations",
                element: <PrivateRoute> <MyRecommendationPage></MyRecommendationPage> </PrivateRoute>
            },
            {
                path: "recommendations-for-me",
                element: <PrivateRoute> <RecommendationsForMePage></RecommendationsForMePage> </PrivateRoute>
            }
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegistrationPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundErrorPage />,
    },
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;
