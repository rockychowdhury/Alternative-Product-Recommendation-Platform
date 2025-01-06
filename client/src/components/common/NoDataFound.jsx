import Lottie from 'lottie-react';
import noDataLottie from '../../assets/nodata.json'
import PropTypes from 'prop-types';
const NoDataFound = ({ message, children }) => {
    return (
        <div className='flex flex-col items-center h-full justify-center gap-4'>
            <div className='h-full'>
                <Lottie animationData={noDataLottie}></Lottie>
            </div>
            <div className='font-semibold text-pretty text-lg max-w-[530px] text-center'>{message}</div>
            <div>
                {children}
            </div>
        </div>
    );
};
NoDataFound.propTypes = {
    message: PropTypes.any,
    children: PropTypes.any,
}
export default NoDataFound;