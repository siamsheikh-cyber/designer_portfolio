import { Link } from "react-router-dom";


export default function UiuxItems() {
    const cards = [
        {
            id: 1,
            vid: "/human.mp4",
            title: "Mobile App UI",
            desc: "User interface design for fitness tracking mobile application.",
            cta: "View More",
            link: "/HumanAdds"
        },
        {
            id: 2,
            vid: "/adds.mp4",
            title: "Mobile App UI",
            desc: "User interface design for fitness tracking mobile application.",
            cta: "View More",
            link: "/AddsVideo"
        },
        {
            id: 3,
            vid: "/cartun.mp4",
            title: "Mobile App UI",
            desc: "User interface design for fitness tracking mobile application.",
            cta: "View More",
            link: "/CartunAdds"
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                    <article
                        key={card.id}
                        className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-200"
                    >
                        <div className="h-54 sm:h-48 w-full relative">
                            <video controls autoPlay muted loop playsInline src={card.vid} className="w-full h-full focus:none"></video>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {card.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-1">
                                {card.desc}
                            </p>

                            <div className="mt-auto">
                                <Link
                                    to={card.link}
                                    className="inline-block px-4 py-2 rounded-full text-white font-medium text-sm 
                               bg-gradient-to-r from-[#6976DE] to-[#7353AE] 
                               shadow-md dark:shadow-[#5C458E]/30 border-gray-500
                               transform transition-all duration-500 ease-linear
                               hover:shadow-2xl hover:from-white hover:to-white hover:text-[#6976DE]  hover:opacity-95"
                                >
                                    {card.cta}
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
