import LeftHero from "./component/leftHero";
import RightHero from "./component/rightHero";

function HeroLayout() {
    return (
        <div className="flex flex-col gap-3.5 pt-15 pb-15 mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#8764ce] to-[#5960b3] dark:from-black dark:to-black md:flex-row md:gap-5">
            <LeftHero />
            <RightHero />
        </div>
    );
}

export default HeroLayout;