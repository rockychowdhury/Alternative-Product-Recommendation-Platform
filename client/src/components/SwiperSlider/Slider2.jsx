
// import LoginButton from '../buttons/LoginButton';
// import { Link } from 'react-router';
// import { Fade } from "react-awesome-reveal";
// import useAuth from '../../hooks/useAuth';
// import RegisterButton from '../buttons/RegisterButton';
const Slider2 = () => {
    // const { user } = useAuth();
    return (
        // <div className='lg:flex gap-40 items-center justify-end h-[500px] p-10 text-black' style={{
        //     backgroundImage: "url(https://i.ibb.co.com/KxsnVTc/1733070659155.jpg)",
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        // }}>
        //     <div className=' space-y-5 lg:space-y-10 mb-8'>
        //         <div className='space-y-6'>
        //             <Fade direction='down'>
        //                 <h1 className='font-bold text-3xl lg:text-5xl'>
        //                     Your Passion, <br /> Our Commitment
        //                 </h1>
        //             </Fade>
        //             <Fade direction='left'>
        //                 <p className='opacity-80 text-pretty'>
        //                     Discover a wide range of equipment designed for <br /> every athlete’s journey. Take control of your career development journey today!
        //                 </p>
        //             </Fade>


        //         </div>
        //         <Fade direction='up'>
        //             <div className=''>
        //                 {
        //                     user && user?.email ?
        //                         <div className='md:space-x-6  flex md:flex-row flex-col md:justify-start items-center justify-center gap-2'>
        //                             <Link to='/all-equipment' className='bg-action px-6 py-3 text-white border border-action  rounded-xl text-xl font-semibold'>Browse Equipment</Link>
        //                             <Link to='/add-equipment' className='border border-action hover:bg-action hover:text-white px-6 py-3 text-black  rounded-xl text-xl font-semibold transition'>Add Equipment</Link>
        //                         </div> :
        //                         <div className='md:space-x-6  flex md:flex-row flex-col md:justify-start items-center justify-center gap-2'>
        //                             <Link className='inline-block' to="/auth/?to=register">
        //                                 <RegisterButton></RegisterButton>
        //                             </Link>
        //                             <Link className='inline-block' to="/auth/?to=login">
        //                                 <LoginButton></LoginButton>
        //                             </Link>
        //                         </div>
        //                 }
        //             </div>
        //         </Fade>
        //     </div>
        // </div>

                  <div className="bg-blue-100 h-[500px] flex items-center justify-center px-6">
                  <div className="text-center space-y-4">
                      <h1 className="text-4xl font-bold text-blue-900">Empowering Decisions</h1>
                      <p className="text-lg text-blue-700">
                          Make smarter choices with recommendations you can trust.
                      </p>
                      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
                          Get Started
                      </button>
                  </div>
              </div>
    );
};

export default Slider2;