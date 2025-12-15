const humanVideo = [
    {
        id: 1,
        vid: "/human.mp4",
        title: "Mobile App UI",
        desc: "User interface design for fitness tracking mobile application.",
    },
    {
        id: 2,
        vid: "/human1.mp4",
        title: "Mobile App UI",
        desc: "User interface design for fitness tracking mobile application.",
    },
];
function HumanAdds() {
    return (
        <>
            <section className="my-container">
                <div className="max-w-6xl mx-auto px-4 py-10">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {humanVideo.map((card) => (
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
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HumanAdds;