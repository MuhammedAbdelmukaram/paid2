"use client";
import { useDetectDevice } from "@/app/hooks/useDetectDevice";
import React, { useMemo, useState, useRef, useEffect } from "react";

const RightSideCard = ({
                           title,
                           totalAvailable,
                           balance,
                           description,
                           descriptionTwo,
                           resaleInfo,
                           videoSrc,
                           borderColor = "#2BEA2A",
                       }) => {
    const { isMobile } = useDetectDevice();
    const [showVideo, setShowVideo] = useState(false);
    const [showParagraph, setShowParagraph] = useState(true);
    const videoRef = useRef(null);
    const paragraphRef = useRef(null);

    const handleContent = () => {
        setShowVideo(!showVideo);
    };

    const handleVideoClick = () => {
        setShowParagraph(!showParagraph);
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener("click", handleVideoClick);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener("click", handleVideoClick);
            }
        };
    }, []);

    const content = useMemo(
        () => (
            <div
                style={{
                    position: "relative",
                    right: isMobile ? 0 : "220px",
                    padding: isMobile ? "15px 25px" : "30px 36px",
                    borderRadius: "6px",
                    backgroundColor: "#0E0E0F",
                    border: `3px solid ${borderColor}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    width: isMobile ? "100%" : "440px",
                    zIndex: 2,
                }}
                className="fade-in"
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        marginBottom: "15px",
                    }}
                >
                    <div
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: "100%",
                            backgroundColor: `${borderColor}`,
                        }}
                    ></div>
                    <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{title}</h1>
                </div>
                <p
                    style={{
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "medium",
                    }}
                >
                    Total Available: {totalAvailable}
                </p>
                <p
                    style={{
                        marginBottom: "22px",
                        fontSize: "14px",
                        fontWeight: "medium",
                    }}
                >
                    $PAID Tokens Balance: {balance}
                </p>
                <p
                    style={{
                        marginBottom: "10px",
                        fontSize: "15px",
                        fontWeight: "normal",
                    }}
                >
                    {description}
                </p>
                <p
                    style={{
                        marginBottom: "10px",
                        fontSize: "15px",
                        fontWeight: "normal",
                    }}
                >
                    {descriptionTwo}
                </p>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>{resaleInfo}</p>
            </div>
        ),
        [isMobile, showVideo]
    );

    const videoContent = useMemo(
        () => (
            <div
                style={{
                    flex: 1,
                    maxWidth: "1000px",
                    zIndex: 1,
                }}
                className="fade-in"
            >
                <video
                    width="100%"
                    height="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        borderRadius: "10px",
                    }}
                    ref={videoRef}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {isMobile && showParagraph && (
                    <p
                        style={{
                            marginTop: "10px",
                            fontSize: "14px",
                            textAlign: "center",
                            color: "#2bea2a",
                        }}
                        ref={paragraphRef}
                    >
                        Tap card to see more
                    </p>
                )}
            </div>
        ),
        [showVideo, showParagraph]
    );

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#010103",
            }}
            onClick={() => isMobile && handleContent()}
        >
            {isMobile ? (
                <>
                    {videoContent}
                    {showVideo && content}
                </>
            ) : (
                <>
                    {videoContent}
                    {content}
                </>
            )}
        </div>
    );
};

export default RightSideCard;
