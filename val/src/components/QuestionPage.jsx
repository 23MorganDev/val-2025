import React from "react";

const questions = [
    "If our love were a storybook, what would you name our first chapter? 📖❤️",
    "Do you remember the moment you realized I was more than just a friend? 🌟",
    "If we could escape anywhere for a day, just you and me, where would we go? 🌍✨",
    "What’s that little thing that I do that always makes you smile, even when you don’t want to? 😊💗",
    "Would you let me be the author of our next adventure, starting with a magical Valentine’s dinner? 🍷🌹"
];

export default function QuestionPage({ onComplete }) {
    const [current, setCurrent] = React.useState(0);

    const handleNext = () => {
        if (current < questions.length - 1) {
            setCurrent(current + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center vh-100"
            style={{
                background: 'linear-gradient(to bottom, #ffdde1, #fff1f3)',
                padding: '20px',
                textAlign: 'center',
                fontFamily: 'sans-serif',
            }}
        >
            <h2
                style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    color: '#d32f2f',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    lineHeight: '1.5',
                }}
            >
                {questions[current]}
            </h2>
            <button
                onClick={handleNext}
                style={{
                    backgroundColor: '#f06292',
                    color: '#fff',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                className="mt-4"
            >
                Next 💖
            </button>
        </div>
    );
}
