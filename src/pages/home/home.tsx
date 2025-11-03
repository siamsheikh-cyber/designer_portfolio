import { Outlet } from "react-router-dom";
import LeutOfAbout from "../about/leyoutOfAbout";
import HeroLayout from "../hero/heroLayout";
import LeyoutOfSkills from "../skills/leyoutOfSkills";
import LayoutOfContact from "../contact/layoutOfContact";

function Home() {
    return (
        <>
            <HeroLayout />
            <LeutOfAbout />
            <LeyoutOfSkills />
            <Outlet />
            <LayoutOfContact />


        </>
    );
}

export default Home;