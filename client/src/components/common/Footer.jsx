import Logo from './Logo';
import { FaFacebook, FaLinkedin,FaInstagram,FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 text-center">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                <Logo></Logo>
                <p className="italic">Discover the better alternative, together.</p>
                <div className="flex space-x-6">
                    <a href="/" className="text-gray-300 hover:text-white transition">
                        Home
                    </a>
                    <a href="/queries" className="text-gray-300 hover:text-white transition">
                        Queries
                    </a>
                    <a href="/about" className="text-gray-300 hover:text-white transition">
                        About Us
                    </a>
                    <a href="/contact" className="text-gray-300 hover:text-white transition">
                        Contact
                    </a>
                </div>

                <div className="flex space-x-4 mt-4 text-2xl">
                    <a href="https://facebook.com" target="_blank">
                        <FaFacebook className='text-blue-500 hover:text-blue-700 transition'></FaFacebook>
                    </a>
                    <a href="https://linkedin.com" target="_blank" >
                        <FaLinkedin className='text-blue-600 hover:text-blue-700 transition'></FaLinkedin>
                    </a>
                    <a href="https://instragram.com" target="_blank" >
                        <FaInstagram className='text-pink-500 hover:text-pink-700 transition'></FaInstagram>
                    </a>
                    <a href="https://twitter.com" target="_blank" >
                        <FaTwitter className='text-blue-500 hover:text-blue-700 transition'></FaTwitter>
                    </a>
                </div>
                <p className="text-gray-400 text-sm mt-4 ">
                    &copy; {new Date().getFullYear()} <span className='font-bold'> Alt<span className='text-action'>Rec</span></span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
