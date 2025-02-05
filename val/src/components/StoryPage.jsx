import React from "react";

export default function StoryPage({ onNext }) {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                background: 'linear-gradient(to bottom, #ffe4e9, #ffffff)',
                padding: '20px',
                textAlign: 'center',
                minHeight: '100vh',               
                paddingTop: '50px',               
                overflowY: 'auto',                
                boxSizing: 'border-box',         
            }}
        >
            <h1
                style={{
                    fontSize: 'clamp(2rem, 6vw, 3rem)',
                    color: '#d32f2f',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    marginTop: '10px',             
                }}
            >
                Since the First Day I Met You... 💖
            </h1>
            <p
                style={{
                    fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
                    color: '#333',
                    maxWidth: '90%',
                    textAlign: 'center',
                    lineHeight: '1.6',
                    marginBottom: '30px',
                }}
            >
                Once upon a time, in the ordinary world of bustling days and quiet nights,
                there was a heart—mine—that didn’t know it was waiting for something extraordinary.
                Then, like a gentle whisper in the wind, you appeared. 🌸 Your smile lit up corners
                of my soul I never knew existed, and your laughter danced like sunshine on water.
                Every day since has been a page in the most beautiful story I’ve ever known.
                So, as our story continues, I have a few questions to ask… not just with words,
                but with all my heart. 💖 🌹✨
            </p>
            <button
                onClick={onNext}
                style={{
                    backgroundColor: '#f06292',
                    color: '#fff',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}
                className="mt-4"
            >
                Continue 💌
            </button>
        </div>
    );
}
