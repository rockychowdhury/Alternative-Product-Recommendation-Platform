import { Link } from 'react-router';
import logo from '../../assets/logo.png'
import PropTypes from 'prop-types';
const Logo = ({position}) => {
    return (
        <Link to="/" className='flex items-center gap-4 '>
            <figure className='w-16 h-auto'>
                <img className='h-full w-full object-cover object-center' src={logo} alt="AltRec" />
            </figure>
            <h3 className={`font-bold text-5xl font-logo ${position==='navbar'?'hidden md:block':"block"}`}>Alt<span className='text-action'>Rec</span></h3>
        </Link>
    );
};
Logo.propTypes = {
    position:PropTypes.string
}
export default Logo;