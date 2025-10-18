import { Outlet } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";

function MainLayout() {
    return (
        <>
            <div >
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;