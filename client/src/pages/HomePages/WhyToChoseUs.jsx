
import { ShieldCheckIcon, SupportIcon, LightBulbIcon } from "@heroicons/react/solid";

const WhyChooseUs = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Why Choose Us?
                </h2>
                <p className="text-gray-600 mb-8">
                    We are committed to providing the best experience for our users by ensuring
                    trust, reliability, and user satisfaction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Trust & Security */}
                    <div className="bg-white shadow-md p-6 rounded-lg transform hover:scale-105 transition duration-300">
                        <ShieldCheckIcon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Trust & Security
                        </h3>
                        <p className="text-gray-600">
                            Your data and privacy are our top priorities.
                        </p>
                    </div>

                    {/* 24/7 Support */}
                    <div className="bg-white shadow-md p-6 rounded-lg transform hover:scale-105 transition duration-300">
                        <SupportIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            24/7 Support
                        </h3>
                        <p className="text-gray-600">
                            Our team is here to assist you at any time.
                        </p>
                    </div>

                    {/* Innovative Solutions */}
                    <div className="bg-white shadow-md p-6 rounded-lg transform hover:scale-105 transition duration-300">
                        <LightBulbIcon className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Innovative Solutions
                        </h3>
                        <p className="text-gray-600">
                            Experience cutting-edge technology and features.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
