import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router';
import LoginButton from '../../components/buttons/LoginButton';
import GoogleSignIn from './GoogleSignIn';
import useAuth from "../../hooks/useAuth";
import useUIContext from "../../hooks/useUIContext";
const LoginPage = () => {
    const { logIn, setUser, setLoading, setError, error } = useAuth();
    const {showToast} = useUIContext();
    const [view, setView] = useState(false);
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        // console.log({ email, password });
        logIn(email, password)
            .then(res => {
                setUser(res.user);
                setLoading(false);
                navigate('/');
                showToast('success', `Welcome back ${res.user.displayName}`);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError(error.code);
                showToast('error', error.code);
            })
    }
    const navigateToRegister = () => {
        setError(null);
        navigate('/auth/register');
    };
    return (
        <div className="space-y-6 border p-10 rounded-2xl">
            <div className="text-center ">
                <div className="space-y-3  relative">
                    <Link to={-1}><FaArrowLeft className="text-2xl absolute top-1 left-0"></FaArrowLeft></Link>
                    <h2 className="font-bold text-3xl font-poppins">Login</h2>
                    <p className="opacity-70">Welcome back! Please enter your details</p>
                </div>
                <div className="h-7 text-red-500 text-center">{error}</div>
            </div>
            <form onSubmit={handleLogIn} className="space-y-6 font-medium " action="">
                <label htmlFor="Email" className="relative block rounded-md border bg-transparent border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                        type="email"
                        id="Email"
                        name='email'
                        required
                        className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Email" />

                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        Email
                    </span>
                </label>
                <label
                    htmlFor="Password"
                    className="relative items-center flex rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <input
                        name="password"
                        required
                        type={view ? "password" : 'text'}
                        id="Password"
                        className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Password"
                    />
                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        Password
                    </span>
                    <div onClick={() => setView(!view)} className="pe-3 absolute right-0">
                        {
                            view ? <IoEyeOutline></IoEyeOutline> :
                                <IoEyeOffOutline></IoEyeOffOutline>
                        }
                    </div>
                </label>
                <div className="flex items-center justify-between">
                    <button type="submit"><LoginButton></LoginButton></button>
                    <Link className="hover:text-blue-500 transition font-medium font-poppins opacity-70 hover:opacity-100">Forget Password?</Link>
                </div>
            </form>
            <span className="relative flex justify-center">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-action to-transparent opacity-75"
                ></div>
                <span className="relative z-10 bg-white px-6">or</span>
            </span>
            <GoogleSignIn></GoogleSignIn>
            <div className="text-center">Don&apos;t have an account? <button onClick={navigateToRegister} className="text-blue-500 transition font-medium font-poppins opacity-70 hover:opacity-100">Register</button></div>
        </div>
    );
};

export default LoginPage;