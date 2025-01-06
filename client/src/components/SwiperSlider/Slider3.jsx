
// import LoginButton from '../buttons/LoginButton';
// import { Link } from 'react-router';
// import RegisterButton from '../buttons/RegisterButton';
// import useAuth from '../../hooks/useAuth';
const Slider3 = () => {
    // const { user } = useAuth();
    return (
        // <div className='lg:flex gap-40 items-center justify-end h-[500px] p-10 text-black' style={{
        //     backgroundImage: "url(https://i.ibb.co.com/wgMNcDP/Getting-A-Job-In-Denmark-scaled.webp)",
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        // }}>
        //     <div className=' space-y-5 lg:space-y-10 mb-8'>
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
        //                     <div className='md:space-x-6  flex md:flex-row flex-col md:justify-start items-center justify-center gap-2'>
        //                         <Link to='/all-equipment' className='bg-action px-6 py-3 text-white border border-action  rounded-xl text-xl font-semibold'>Browse Equipment</Link>
        //                         <Link to='/add-equipment' className='border border-action hover:bg-action hover:text-white px-6 py-3 text-black  rounded-xl text-xl font-semibold transition'>Add Equipment</Link>
        //                     </div> :
        //                     <div className='md:space-x-6  flex md:flex-row flex-col md:justify-start items-center justify-center gap-2'>
        //                         <Link className='inline-block' to="/auth/?to=register">
        //                             <RegisterButton></RegisterButton>
        //                         </Link>
        //                         <Link className='inline-block' to="/auth/?to=login">
        //                             <LoginButton></LoginButton>
        //                         </Link>
        //                     </div>
        //             }
        //         </div>
        //     </div>
        // </div>
        <div className="bg-gray-900 h-[500px] flex items-center justify-center px-6">
            <div className="text-center text-white space-y-4">
                <h1 className="text-4xl font-bold text-purple-400">Discover Insights</h1>
                <p className="text-lg">
                    Dive into a network of powerful recommendations and explore new possibilities.
                </p>
                <button className="px-6 py-3 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Slider3;