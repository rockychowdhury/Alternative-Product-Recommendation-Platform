
import HeroSectionSlider from '../../components/SwiperSlider/HeroSection';
import RecentQueries from './RecentQueries';
import WhyChooseUs from './WhyToChoseUs';
import Testimonials from './Testimonial';
const HomePage = () => {
    return (
        <div>
            <div>
                <HeroSectionSlider></HeroSectionSlider>
            </div>
            <div>
                <RecentQueries></RecentQueries>
            </div>
            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>
            <section>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default HomePage;