import { Outlet } from "react-router";
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
const CommonLayout = () => {
    return (
        <section className="font-inter">
                <Navbar></Navbar>
            <main className="container ">
                <Outlet />
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </section>
    );
};

export default CommonLayout;