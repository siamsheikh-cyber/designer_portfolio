import { Outlet } from "react-router-dom";
import LeutOfAbout from "../about/leyoutOfAbout";
import HeroLayout from "../hero/heroLayout";
import LeyoutOfSkills from "../skills/leyoutOfSkills";

function Home() {
    return (
        <>
            <HeroLayout />
            <LeutOfAbout />
            <LeyoutOfSkills />
            <Outlet />


        </>
    );
}

export default Home;