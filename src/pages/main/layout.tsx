import { Outlet } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";

function MainLayout() {
    return (
        <>

            <div className="">
                <Header />
                <div className="flex-1">
                    <Outlet />
                </div>
                <Footer />
            </div>

        </>
    );
}

export default MainLayout;