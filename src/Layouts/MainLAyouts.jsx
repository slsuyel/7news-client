import { Outlet } from "react-router-dom";
import Header from "../pages/Share/Header";
import Special from "../pages/Categories/Special";
import Footer from "../pages/Share/Footer";

const MainLAyouts = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Special/>
            <Footer/>
        </>
    );
};

export default MainLAyouts;

