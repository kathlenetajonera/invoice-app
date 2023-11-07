function Loading() {
    const cards = Array.from({ length: 8 }, (_, index) => index + 1);

    return (
        <div className="animate-pulse">
            {cards.map((idx) => (
                <div
                    key={idx}
                    className="w-full h-[70px] bg-light-black dark:bg-dark-card rounded-lg mb-4"
                ></div>
            ))}
        </div>
    );
}

export default Loading;
