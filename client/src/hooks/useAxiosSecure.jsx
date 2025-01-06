import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';
import useUIContext from './useUIContext';
import { API } from '../utils/API';
const axiosInstance = axios.create({
    baseURL: API,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logout } = useAuth();
    const { showToast } = useUIContext();
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
            (response) =>{
                return response;
            },
            (error) => {
                if (error.status === 401 || error.status === 403) {
                    // console.log("logging out");
                    logout();
                    navigate('/auth/login');
                    showToast('error', 'Unauthorized Access');
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosInstance.interceptors.response.eject(interceptor);
        };
    }, [logout, navigate, showToast]);

    return axiosInstance;
};

export default useAxiosSecure;
