
import { useNavigate } from 'react-router';
import GoggleSIgnInButton from '../../components/buttons/GoggleSIgnInButton';
import useAuth from '../../hooks/useAuth';
import useUIContext from '../../hooks/useUIContext';

const GoogleSignIn = () => {
    const { handleGoggleLogin, setUser, setLoading, setError } = useAuth();
    const {showToast} = useUIContext();
    const navigate = useNavigate();
    const continueWithGoogle = () => {
        handleGoggleLogin()
            .then(res => {
                if (res.user?.email) {
                    setUser(res.user);
                    setLoading(false);
                    navigate('/');
                    showToast('success',`Logged In as ${res.user?.email}` );
                    setError(null);
                }
            })
            .catch(error => {
                // console.log(error);
                setError(error.code);
                showToast('error',error.code);
                setLoading(false);
            });
    }

    return (
        <button onClick={continueWithGoogle} className='text-center w-full'>
            <GoggleSIgnInButton></GoggleSIgnInButton>
        </button>
    );
};

export default GoogleSignIn;