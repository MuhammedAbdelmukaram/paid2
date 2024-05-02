import React from 'react';

const RightSideCard = ({ title, totalAvailable, balance, description, resaleInfo, videoSrc, borderColor = "#2BEA2A" }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: "#010103",
        }}>
            {/* Left Side - Video */}
            <div style={{
                flex: 1,
                maxWidth: '1000px', // Adjusts the width of the video container
                zIndex: 1 // Ensures video is below the text
            }}>
                <video
                    width="100%"
                    height="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        borderRadius: '10px' // Makes the video corners rounded
                    }}>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Right Side - Text Content */}
            <div style={{
                position: 'relative',
                right: '220px',
                padding: '30px 50px',
                borderRadius: '6px',
                backgroundColor: "#0E0E0F",
                border: `3px solid ${borderColor}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: '440px',
                zIndex: 2 // Ensure text is above the video
            }}>
                <div style={{display:"flex", alignItems:"center", gap:14,marginBottom: '15px'}}>


                    <div style={{height: 30, width: 30, borderRadius: "100%", backgroundColor: `${borderColor}`}}></div>
                    <h1 style={{fontSize: '24px', fontWeight: 'bold'}}>{title}</h1>
                </div>
                <p style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 'medium' }}>Total Available: {totalAvailable}</p>
                <p style={{ marginBottom: '22px', fontSize: '14px', fontWeight: 'medium' }}>$PAID Tokens Balance: {balance}</p>
                <p style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'normal' }}>{description}</p>
                <p style={{ fontSize: '16px', fontWeight: 'normal' }}>{resaleInfo}</p>
            </div>
        </div>
    );
};

export default RightSideCard;
