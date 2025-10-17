import { Outlet } from "react-router-dom";
import Header from "./component/header";

function MainLayout() {
    return (
        <>
            <div>
                <Header />
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;