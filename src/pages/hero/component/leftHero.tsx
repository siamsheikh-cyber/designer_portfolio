

export default function LeftHero() {
    return (
        <section className="flex items-center justify-center 
  
              px-6 md:px-12 transition-colors duration-500">

            <div className="max-w-3xl text-left">


                <h1 className="mt-2 text-4xl md:text-5xl font-extrabold 
                 text-gray-900 dark:text-gray-100 leading-tight">
                    Hi, I'm <span className="text-[#F093FB] block lg:none">Abdul Halim</span>
                </h1>

                <h2 className="mt-2 text-2xl md:text-3xl font-semibold 
                     text-white dark:text-[#a29ccd]">
                    Professional Graphic Designer & Video Editor
                </h2>

                <p className="mt-6 text-gray-100 dark:text-gray-300 
                     max-w-xl text-lg leading-relaxed">
                    I craft meaningful visuals and dynamic video content that tell powerful stories, strengthen brand identity, and turn ideas into memorable creative experiences.
                </p>

                <div className="mt-5 lg:mt-10">
                    <a
                        href="#work"
                        className="inline-block px-8 py-3 rounded-full text-white font-medium text-lg 
                               bg-gradient-to-r from-[#6976DE] to-[#7353AE] 
                               shadow-md dark:shadow-[#5C458E]/30
                               transform transition-all duration-500 ease-linear
                               hover:shadow-2xl hover:from-white hover:to-white hover:text-[#6976DE]  hover:opacity-95"
                    >
                        Download My CV
                    </a>

                </div>
            </div>
        </section>
    );
}
