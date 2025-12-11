import LeftAbout from "./component/leftAbout";
import RightAbout from "./component/rightAbout";

function LeutOfAbout() {
    return (
        <div className="dark:bg-gray-900 bg-white">
            <div className="my-container">
                <div id="about" className="mx-auto px-4 sm:px-6 lg:px-8 py-15">
                    <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
                    <div className="flex flex-col gap-10 lg:flex-row items-center">
                        <LeftAbout />
                        <RightAbout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeutOfAbout;