export default function RightAbout() {
    return (
        <section className="flex flex-col basis-[50%] sm:flex-wrap sm:flex-row gap-6 sm:gap-8 items-center px-4 sm:px-10 w-full max-w-5xl mx-auto">
            {/* Card 1: Experience (Purple Theme) */}
            <div
                className="flex-1 min-w-[80%] sm:min-w-[45%] md:min-w-[30%] h-40 sm:h-44 rounded-2xl p-6 flex flex-col items-center justify-center gap-1 shadow-lg border border-gray-100 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#F0F5FF] to-[#f4eaf1]"
                aria-label="Over 5 years experience"
            >
                <div className="text-3xl sm:text-4xl font-extrabold leading-none text-[#8671d1]">2+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Years</div>
                <div className="text-xs opacity-90 text-gray-500">Experience</div>
            </div>

            {/* Card 2: Projects (Green Theme) */}
            <div
                className="flex-1 min-w-[80%]  sm:min-w-[45%] md:min-w-[30%] h-40 sm:h-44 rounded-2xl p-6 flex flex-col items-center justify-center gap-1 shadow-lg border border-gray-100 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#FCF2F9] to-[#E0F7F0]"
                aria-label="Over 50 successful projects"
            >
                <div className="text-3xl sm:text-4xl font-extrabold leading-none text-[#6F5BB9]">200+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Successful</div>
                <div className="text-xs opacity-90 text-gray-500">Projects</div>
            </div>

            {/* Card 3: Rating (Yellow Theme) */}
            <div
                className="flex-1 min-w-[80%]  sm:min-w-[45%] md:min-w-[30%] h-40 sm:h-44 rounded-2xl p-6 flex flex-col items-center justify-center gap-1 shadow-lg border border-gray-100 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#FFF7E0] to-[#FCF2F9]"
                aria-label="Top rated freelancer"
            >
                <div className="text-3xl sm:text-4xl font-extrabold leading-none text-[#6F5BB9]">Mid</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Lavel</div>
                <div className="text-xs opacity-90 text-gray-500">Freelancer</div>
            </div>
        </section>
    );
}