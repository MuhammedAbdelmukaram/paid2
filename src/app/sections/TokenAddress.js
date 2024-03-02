"use client";
import React, { useState } from 'react';
import Image from "next/image";
import styles from './TokenAddress.module.css';

const TokenAddress = () => {
    const [copied, setCopied] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    // Function to copy the token address and provide feedback
    const copyToClipboard = (e) => {
        const tokenAddress = "7VtwS9yrHjL19UdBHotVQuerxbpGkA3vo5BHz8zYWGpP7VtwS9yrHjL19UdBHotVQuerxbpGkA3vo5BHz8zYWGpP";
        navigator.clipboard.writeText(tokenAddress).then(() => {
            // Capture the click position
            setClickPosition({ x: e.clientX, y: e.clientY });
            // Show feedback for 1500ms
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <>
            <div onClick={copyToClipboard} style={{width: "72%", backgroundColor: "rgba(50, 50, 50, 0.5)", color: "#fff", borderRadius: 100,
                padding: "12px 30px 12px 30px", display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "space-between",
                cursor: "pointer", marginTop: 64, zIndex: 2}}>

                <div style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
                    <p>Token Address:</p>
                    <p style={{marginLeft: 80}}>
                        7VtwS9yrHjL19UdBHotVQuerxbpGkA3vo5BHz8zYWGpP7VtwS9yrHjL19UdBHotVQuerxbpGkA3vo5BHz8zYWGpP
                    </p>
                </div>

                <div style={{zIndex: 3}}>
                    <Image
                        src="/copy.png"
                        alt="Copy Icon"
                        width={16}
                        height={16}
                        priority
                    />
                </div>
            </div>

            {copied && (
                <div className={styles.copiedPopup} style={{ left: `${clickPosition.x}px`, top: `${clickPosition.y}px` }}>
                    Copied to clipboard!
                </div>
            )}
        </>
    );
};

export default TokenAddress;

