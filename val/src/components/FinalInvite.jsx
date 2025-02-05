import React, { useState } from "react";
import backgroundImage from "../assets/Happy Valentine1.jpg";

export default function FinalInvite() {
    const [showMessage, setShowMessage] = useState(false);

    const handleYesClick = () => {
        setShowMessage(true);
    };

    // Inline styles for responsiveness
    const containerStyle = {
        backgroundColor: showMessage ? "transparent" : "#ffe4e9",
        backgroundImage: showMessage ? `url(${backgroundImage})` : "none",
        backgroundSize: showMessage ? "contain" : "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        transition: "all 1.5s ease-in-out",
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.4)",
        zIndex: 1,
        pointerEvents: "none",
    };

    const messageBoxStyle = {
        backgroundColor: "rgba(255, 255, 255, 0)",
        padding: "20px",
        borderRadius: "15px",
        maxWidth: "90%",
        width: "500px",
        textAlign: "justify",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        zIndex: 2,
        fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
        lineHeight: "1.8",
    };

    const buttonStyle = {
        backgroundColor: "#f06292",
        color: "#fff",
        border: "none",
        padding: "15px 30px",
        borderRadius: "30px",
        fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
        cursor: "pointer",
        zIndex: 2,
    };

    const headingStyle = {
        color: "#d32f2f",
        fontWeight: "bold",
        fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
        zIndex: 2,
    };

    const signatureStyle = {
        fontFamily: "Cursive, sans-serif",
        fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
        color: "#d32f2f",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyle}>
            {showMessage && <div style={overlayStyle} />}
            {!showMessage ? (
                <>
                    <h1 style={headingStyle}>Will You Be My Valentine? 💕</h1>
                    <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", zIndex: 2 }}>
                        You’ve filled my days with warmth and my heart with joy. 💖
                        Will you be my Valentine and share a special dinner with me tonight? 🌹
                    </p>
                    <button style={buttonStyle} onClick={handleYesClick}>
                        Yes, I’d Love To! 🌹
                    </button>
                </>
            ) : (
                <div style={messageBoxStyle}>
                    <h2 style={headingStyle}>My Dearest Love, ❤️</h2>
                    <p>
                        From the moment our paths crossed, my heart found its rhythm in the beat of your presence. You are the warmth in my quiet moments, the spark in my ordinary days, and the gentle whisper that lingers in my thoughts. ❤️
                    </p>
                    <p>
                        Every glance, every smile, every word from you is etched into the pages of my soul. Tonight, I don’t just want to share a meal—I want to savor the beauty of *us*, wrapped in laughter, love, and the magic only you bring. 🌹✨
                    </p>

                    <p style={signatureStyle}>
                        With all my heart, <br /> Morgan 💌
                    </p>
                </div>
            )}
        </div>
    );
}
