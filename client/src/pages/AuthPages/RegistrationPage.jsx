import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router';
import RegisterButton from '../../components/buttons/RegisterButton';
import GoogleSignIn from './GoogleSignIn';
import { validatePassword } from "../../utils/passwordValidate";
import { Tooltip } from 'react-tooltip'
import useAuth from "../../hooks/useAuth";
import useUIContext from "../../hooks/useUIContext";
const RegistrationPage = () => {
    const [view, setView] = useState(false);
    const { createNewUser, setUser, setLoading, profileUpdate, error, setError } = useAuth();
    const { showToast } = useUIContext();
    const navigate = useNavigate();
    // setError(null);
    const handleRegistration = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const first_name = form.get('first-name');
        const last_name = form.get('last-name');
        const email = form.get('email');
        const password = form.get('password');
        const photoURL = form.get('photoUrl');
        const displayName = first_name.concat(` ${last_name}`);
        if (!validatePassword(password)) {
            showToast('error', "Invalid Password!");
            setError("Invalid Password!");
            return;
        }
        createNewUser(email, password)
            .then(res => {
                if (res.user?.email) {
                    profileUpdate({ displayName, photoURL });
                    setUser(res.user);
                    setLoading(true);
                }
                setTimeout(() => {
                    setLoading(false);
                    navigate('/');
                    showToast('success', 'Account Created Successfully.');
                }, 2000)
                setError(null);
            })
            .catch(error => {
                showToast('error', error.code);
                setLoading(false);
                setError(error.code);
                // console.error(error.message);
                // console.error(error.code);
            })
        // console.log({ displayName, email, password, photoURL });
    }
    const navigateToLogin = () => {
        setError(null);
        navigate('/auth/login');
    }
    return (
        <div className="space-y-6 border p-10 rounded-2xl">
            <div className="space-y-3 text-center">
                <div className="text-center relative">
                    <Link to={-1}><FaArrowLeft className="text-2xl absolute top-1 left-0"></FaArrowLeft></Link>
                    <h2 className="font-bold text-3xl  font-poppins">Sign Up</h2>
                </div>
                <p className="font-medium"><span className="opacity-90">Welcome to</span> Alt<span className="text-action">Rec</span>!</p>
                <div className="h-7 text-red-500 text-center">{error}</div>
            </div>
            <form onSubmit={handleRegistration} className="space-y-6 font-medium " action="">
                <div className="flex flex-col lg:flex-row items-center gap-4 ">
                    <label htmlFor="First-Name" className="relative block rounded-md border bg-transparent border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <input
                            name="first-name"
                            type="text"
                            id="First-Name"
                            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                            placeholder="First Name" />

                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            First Name
                        </span>
                    </label>
                    <label htmlFor="Last-Name" className="relative block rounded-md border bg-transparent border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <input
                            name='last-name'
                            type="text"
                            id="Last-Name"

                            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                            placeholder="Last Name" />

                        <span
                            className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                        >
                            Last Name
                        </span>
                    </label>
                </div>
                <label htmlFor="photo" className="relative block rounded-md border bg-transparent border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                        type="url"
                        name='photoUrl'
                        id="photo"
                        className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="photo" />

                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        Photo Url
                    </span>
                </label>
                <label htmlFor="Email" className="relative block rounded-md border bg-transparent border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                        type="email"
                        id="Email"
                        name='email'
                        required
                        className=" w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
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
                        type={view ? "password" : 'text'}
                        id="Password"
                        required
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
                    <button type="submit"><RegisterButton></RegisterButton></button>
                    <p className="text-indigo-400" data-tooltip-id="password-requirements" data-tooltip-content="
                    Password: 6+ chars, 1 uppercase, 1 lowercase.
                    ">
                        {
                            error === 'Invalid Password!' ? 'See Password Requirements' : null
                        }
                    </p>

                </div>
            </form>
            <span className="relative flex justify-center">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-action to-transparent opacity-75"
                ></div>
                <span className="relative z-10 bg-white px-6">or</span>
            </span>
            <GoogleSignIn></GoogleSignIn>
            <div className="text-center">Already have an account? <button onClick={navigateToLogin} className="text-blue-500 transition font-medium font-poppins opacity-70 hover:opacity-100">Login</button></div>
            <Tooltip id="password-requirements" ></Tooltip>
        </div>
    );
};

export default RegistrationPage;