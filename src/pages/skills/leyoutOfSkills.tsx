import SkillsSection from "./component/skills";

function LeyoutOfSkills() {
    return (
        <div className="bg-[#F9FAFB] dark:bg-black">
            <div className="my-container">
                <div id="skills" className=" pt-15 pb-15 mx-auto px-4 sm:px-6 lg:px-8">
                    <SkillsSection />
                </div>
            </div>
        </div>
    );
}

export default LeyoutOfSkills;