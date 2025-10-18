import LeftAbout from "./component/leftAbout";
import RightAbout from "./component/rightAbout";

function LeutOfAbout() {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-black py-15">
            <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
            <div className="flex flex-col gap-10 lg:flex-row items-center">
                <LeftAbout />
                <RightAbout />
            </div>
        </div>
    );
}

export default LeutOfAbout;