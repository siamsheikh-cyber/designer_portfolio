export default function RightAbout() {
    return (
        <section className="flex flex-col sm:flex-row gap-8 items-center basis-[50%] px-10">
            {/* Card 1: Experience (Purple Theme) */}
            <div
                className="min-w-[110px] sm:min-w-[140px] rounded-2xl p-6 flex flex-col items-center justify-center gap-1 shadow-lg border border-gray-100 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#F0F5FF] to-[#FCF2F9]"
                aria-label="Over 50 successful projects"
            >
                <div className="text-3xl sm:text-4xl font-extrabold leading-none text-[#6F5BB9]">
                    5+
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-600">
                    Years
                </div>
                <div className="text-xs opacity-90 text-gray-500">Experience</div>
            </div>

            {/* Card 2: Projects (Green Theme) */}
            <div
                className="min-w-[110px] sm:min-w-[140px] rounded-2xl p-6 flex flex-col items-center justify-center gap-1 shadow-lg border border-gray-100 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#FCF2F9] to-[#FCF2F9]"
                aria-label="Over 50 successful projects"
            >
                <div className="text-3xl sm:text-4xl font-extrabold leading-none text-[#6F5BB9]">
                    50+
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-600">
                    Successful
                </div>
                <div className="text-xs opacity-90 text-gray-500">
                    Projects
                </div>
            </div>

            {/* Card 3: Rating (Yellow Theme) */}
            <div
                className="min-w-[110px] sm:min-w-[140px] rounded-2xl p-6 flex flex-col items-center justify-center gap-1 shadow-lg border border-gray-100 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#FCF2F9] to-[#F0F5FF]"
                aria-label="Over 50 successful projects"
            >
                {/* ডিজাইন সামঞ্জস্যের জন্য ফন্ট সাইজ sm:text-4xl করা হয়েছে */}
                <div className="text-3xl sm:text-4xl font-extrabold leading-none text-[#6F5BB9]">
                    Top
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-600">
                    Rated
                </div>
                <div className="text-xs opacity-90 text-gray-500">Freelancer</div>
            </div>
        </section>
    );
}