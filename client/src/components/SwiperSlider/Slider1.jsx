
// import { Link } from 'react-router';
// import useAuth from '../../hooks/useAuth';
// import RegisterButton from '../buttons/RegisterButton';
// import LoginButton from '../buttons/LoginButton';
const Slider1 = () => {
    // const { user } = useAuth();
    return (
        // <div className='lg:flex gap-40 items-center h-[500px] p-10 text-black' style={{
        //     backgroundImage: "url(https://i.ibb.co.com/PrJQ2xF/main-image.webp)",
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        // }}>
        //     <div className='flex-1 space-y-5 lg:space-y-10 mb-8'>
        //         <div className='space-y-6'>
        //             <h1 className='font-bold text-3xl lg:text-5xl'>
        //                 Your Passion, <br /> Our Commitment
        //             </h1>
        //             <p className='opacity-80 text-pretty'>
        //                 Discover a wide range of equipment designed for <br /> every athlete’s journey. Take control of your career development journey today!
        //             </p>
        //         </div>
        //         <div className=''>
        //             {
        //                 user && user?.email ?
        //                     <div className='md:space-x-6 flex md:flex-row flex-col md:justify-start items-center justify-center gap-2'>
        //                         <Link to='/all-equipment' className='bg-action  px-6 py-3 text-white border border-action  rounded-xl text-xl font-semibold'>Browse Equipment</Link> 
        //                         <Link to='/add-equipment' className='border border-action hover:bg-action hover:text-white px-6 py-3 text-black  rounded-xl text-xl font-semibold transition'>Add Equipment</Link> 
        //                     </div>:
        //                     <div className='md:space-x-6  flex md:flex-row flex-col md:justify-start items-center justify-center gap-2'>
        //                         <Link className='inline-block' to="/auth/?to=register">
        //                             <RegisterButton></RegisterButton>i
        //                         </Link>
        //                         <Link className='inline-block' to="/auth/?to=login">
        //                             <LoginButton></LoginButton>
        //                         </Link>
        //                     </div>
        //             }
        //         </div>
        //     </div>
        // </div>
        <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 h-[500px] flex items-center justify-center px-6">
        <div className="text-center text-white space-y-4">
          <h1 className="text-4xl font-bold">Seamless Sharing</h1>
          <p className="text-lg">
            Share your expertise effortlessly with a vibrant community.
          </p>
          <button className="px-6 py-3 bg-teal-700 rounded-lg shadow-lg hover:bg-teal-800 transition">
            Explore Now
          </button>
        </div>
      </div>
    );
};

export default Slider1;