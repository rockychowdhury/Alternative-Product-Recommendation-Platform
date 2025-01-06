
const Testimonials = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-100 shadow-md p-6 rounded-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-600 italic mb-4">
                            &quot;This platform is amazing! It made everything so much easier and reliable. Highly recommend!&quot;
                        </p>
                        <h3 className="text-lg font-semibold text-gray-800">
                            - Jane Doe
                        </h3>
                    </div>
                    <div className="bg-gray-100 shadow-md p-6 rounded-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-600 italic mb-4">
                            &quot;Excellent customer support and seamless experience. I&apos;m really happy with the service!&quot;
                        </p>
                        <h3 className="text-lg font-semibold text-gray-800">
                            - John Smith
                        </h3>
                    </div>
                    <div className="bg-gray-100 shadow-md p-6 rounded-lg transform hover:scale-105 transition duration-300">
                        <p className="text-gray-600 italic mb-4">
                            &quot;A trustworthy platform with top-notch features. It exceeded my expectations.&quot;
                        </p>
                        <h3 className="text-lg font-semibold text-gray-800">
                            - Sarah Lee
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
