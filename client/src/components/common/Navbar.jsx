import { Link, NavLink } from 'react-router';
import Logo from './Logo';
import defaultProfile from '../../assets/defaultProfile.jpg'
import LogoutButton from '../buttons/LogoutButton';
import LoginButton from '../buttons/LoginButton';
import RegisterButton from '../buttons/RegisterButton';
import useAuth from '../../hooks/useAuth';
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
    const { user, logout } = useAuth();
    const publicLinks = [
        { name: 'Home', path: '/' },
        { name: 'Queries', path: '/queries' },
    ];
    const allLinks = [
        ...publicLinks,
        { name: 'Recommendations For Me', path: '/recommendations-for-me', private: true },
        { name: 'My Queries', path: '/my-queries', private: true },
        { name: 'My recommendations', path: '/my-recommendations', private: true }
    ]
    return (
        <div className='py-4'>
            <div className='flex items-center justify-between'>
                <Logo position={"navbar"}></Logo>
                <ul className='lg:flex gap-6 font-medium hidden text-lg'>
                    {
                        allLinks.map((link, idx) =>
                            link?.private && !user ? null : (
                                <li key={idx}>
                                    <NavLink to={link.path} className={({ isActive }) => isActive ? "text-action font-semibold underline underline-offset-4 transition" : "hover:font-semibold hover:text-action/80 transition"}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            )
                        )
                    }
                </ul>
                <div>
                    {
                        user && user?.email ?
                            <div className='flex items-center gap-2 xxl:gap-6'>
                                <figure className='w-14 h-14'>
                                    <img className='w-full h-full object-cover object-center rounded-full border border-action' src={user?.photoURL ? user.photoURL : defaultProfile} alt={user?.name} />
                                </figure>
                                <button className='hidden lg:block' onClick={logout}> <LogoutButton></LogoutButton> </button>
                                <div className='relative lg:hidden group'>
                                    <div className='text-3xl'><TiThMenu></TiThMenu></div>
                                    <ul className='text-right absolute font-medium hidden group-hover:block top-5 z-50 bg-marble rounded-lg p-3 text-nowrap right-0 text-lg'>
                                        {
                                            allLinks.map((link, idx) =>
                                                link?.private && !user ? null : (
                                                    <li key={idx}>
                                                        <NavLink to={link.path} className={({ isActive }) => isActive ? "text-action font-semibold underline underline-offset-4 transition" : "hover:font-semibold hover:text-action/80 transition"}>
                                                            {link.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            )
                                        }
                                        <button onClick={logout}> <LogoutButton></LogoutButton> </button>
                                    </ul>
                                </div>
                            </div> :
                            <div className='flex items-center gap-6'>
                                <Link to='/auth/login'><LoginButton></LoginButton></Link>
                                <Link to='/auth/register'><RegisterButton></RegisterButton></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;