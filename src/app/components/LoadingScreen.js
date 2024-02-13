"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "../page.module.css"; // Adjust the path to your CSS module as needed


export const ProgressBar = ({ completionTime }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = oldProgress + 1;
                if (newProgress === 100) {
                    clearInterval(interval);
                }
                return newProgress;
            });
        }, completionTime / 100);

        return () => {
            clearInterval(interval);
        };
    }, [completionTime]);

    return (
        <div style={{ width: '100%', background: '#111', borderRadius: '2px', marginTop:8 }}>
            <div style={{
                height: '3px',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, rgba(63,251,94,1) 0%, rgba(70,252,107,1) 100%)',
                borderRadius: '10px',
                transition: 'width 1s ease-in-out',
            }} />
        </div>
    );
};

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false); // Hide the loading screen once loading is complete
    };

    if (!isLoading) {
        return null; // Don't render anything if loading is complete
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }}>
    <div style={{height:"50vh", display:"flex", alignItems:"center", flexDirection:"column"}}>
        <div className={styles.rotatingImage}>
            <Image
                src="/PaidGreen.png"
                alt="Logo"
                width={100}
                height={100}
                priority
            />
        </div>
        <ProgressBar completionTime={2000} onComplete={handleLoadingComplete} />
    </div>
        </div>
    );
};

export default LoadingScreen;
