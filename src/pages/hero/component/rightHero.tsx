export default function RightHero() {
    return (
        <div className="flex justify-center items-center basis-[50%] pt-10 lg:pt-0">
            <div className="relative group">
                <div className="relative w-62 h-62 md:w-86 md:h-86 rounded-full overflow-hidden z-10">
                    <img
                        src="/abdulhalim.jpeg"
                        alt="Designer portrait"
                        className="w-full h-full object-cover transform transition-transform duration-700 
                 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}
