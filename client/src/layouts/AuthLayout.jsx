import { Outlet } from "react-router";
import PropTypes from "prop-types";
import Logo from '../components/common/Logo';
import HomeButton from '../components/buttons/HomeButton';
import HeroSectionSlider from '../components/SwiperSlider/HeroSection';

const AuthLayout = ({ children }) => {
    return (
        <div className=" lg:h-screen w-full lg:p-10 lg:bg-[#2b2738] font-inter ">
            <div className="h-full w-full flex flex-col lg:gap-0 gap-10 lg:flex-row rounded-2xl p-5 lg:border bg-white container">
                <div className="lg:w-1/2 overflow-hidden order-2 h-full flex flex-col justify-between rounded-2xl border  ">
                    <div className="flex  items-center justify-between p-3 lg:p-10">
                        <Logo position={"navbar"}></Logo>
                        <HomeButton></HomeButton>
                    </div>
                    <div className="overflow-hidden rounded-xl">
                        <HeroSectionSlider></HeroSectionSlider>
                    </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2 h-full flex items-center justify-center lg:p-10">
                    <Outlet>
                        {children}
                    </Outlet>
                </div>
            </div>
        </div>
    );
};
AuthLayout.propTypes = {
    children: PropTypes.any,
}
export default AuthLayout;