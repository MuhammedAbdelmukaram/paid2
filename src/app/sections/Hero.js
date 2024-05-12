"use client";
import React, {Suspense, useState} from "react";
import Image from "next/image";
import Header from "@/app/sections/Header";
import styles from "./Hero.module.css";
import LoadingScreen from "../components/LoadingScreen";

const Hero = ({handleImageLoad}) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        // Check if the viewport width is greater than 768 pixels
        if (window.innerWidth > 768) {
            setIsFullscreen(!isFullscreen);
        }
    };


    const handleSPLClick = () => {
        const section = document.getElementById("reroll");
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    };

    const handleMemberCardsClick = () => {
        const section = document.getElementById("membercards");
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <div className={styles.heroContainer}>
            <div className={styles.textContainer}>
                <div>
                    <p className={styles.mainTitle}>GET</p>
                    <p className={styles.highlightedTitle}>$PAID</p>
                </div>
                <div className={styles.subTitleContainer}>
                    <p className={styles.subTitle}>
                        PAID Inc. Continues To Reward Holders Through Infinite Scale of $SOL Generating Products.
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button1} onClick={handleSPLClick}>
                        What is SPL404?
                    </button>
                    <button className={styles.button2} onClick={handleMemberCardsClick}>
                        MEMBER CARDS
                    </button>
                </div>


                <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                    <div className={styles.logoContainer}>
                        <Image
                            handleImageLoad={handleImageLoad}
                            src="/superTeamLogo.png"
                            alt="Logo"
                            width={150}
                            style={{objectFit: "contain"}}
                            height={40}
                            priority
                        />
                        <div className={styles.offsetLogo}>
                            <Image
                                handleImageLoad={handleImageLoad}
                                src="/SolFloare.png"
                                alt="Logo"
                                width={150}
                                height={42}
                                style={{objectFit: "contain"}}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Suspense fallback={<LoadingScreen/>}>
                <div className={styles.videoContainer} onClick={toggleFullscreen}>
                    <video
                        className={isFullscreen ? styles.fullscreenVideo : styles.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/HeroToken.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Suspense>
            <Suspense fallback={<LoadingScreen/>}>
                {isFullscreen && (
                    <div
                        className={styles.fullscreenVideoContainer}
                        onClick={toggleFullscreen}
                    >
                        <video
                            className={styles.fullscreenVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/HeroCard.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </Suspense>
        </div>
    );
};

export default Hero;
