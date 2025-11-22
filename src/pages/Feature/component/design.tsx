

export default function ItemsBranding() {
    const cards = [
        {
            id: 1,
            img: "/cart.jpeg",
            title: "Brand Identity Design",
            desc: "Complete brand identity for tech startup including logo, colors, and guidelines.",
            cta: "View project",
        },
        {
            id: 2,
            img: "/thamble.jpeg",
            title: "Brand Identity Design",
            desc: "Complete brand identity for tech startup including logo, colors, and guidelines.",
            cta: "View project",
        },
        {
            id: 3,
            img: "/pakage.jpeg",
            title: "Brand Identity Design",
            desc: "Complete brand identity for tech startup including logo, colors, and guidelines.",
            cta: "View project",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                    <article
                        key={card.id}
                        className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
                    >
                        <div className="h-44 sm:h-48 w-full relative">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {card.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-1">
                                {card.desc}
                            </p>

                            <div className="mt-auto">
                                <a
                                    href="#work"
                                    className="inline-block px-4 py-2 rounded-full text-white font-medium text-sm 
                               bg-gradient-to-r from-[#6976DE] to-[#7353AE] 
                               shadow-md dark:shadow-[#5C458E]/30 border-gray-500
                               transform transition-all duration-500 ease-linear
                               hover:shadow-2xl hover:from-white hover:to-white hover:text-[#6976DE]  hover:opacity-95"
                                >
                                    {card.cta}
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
