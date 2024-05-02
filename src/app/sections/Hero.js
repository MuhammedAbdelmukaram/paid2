"use client"
import Image from "next/image";
import Header from "@/app/sections/Header";
import styles from "./Hero.module.css";
import {useState} from "react";

const Hero = () => {

    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };


    return (
        <div className={styles.heroContainer}>
            <div className={styles.textContainer}>
                <div>
                    <p className={styles.mainTitle}>GET</p>
                    <p className={styles.highlightedTitle}>$PAID</p>
                </div>

                <div className={styles.subTitleContainer}>
                    <p className={styles.subTitle}>We Continue To Give Back to Holders Through Scale!</p>
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.button1}>
                        What is SPL404?
                    </button>
                    <button className={styles.button2}>
                        MEMBER CARDS
                    </button>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.logoContainer}>
                    <Image src="/superTeamLogo.png" alt="Logo" width={150} height={40} priority />
                    <div className={styles.offsetLogo}>
                        <Image src="/SolFloare.png" alt="Logo" width={150} height={42} priority />
                    </div>
                    <Image src="/mutantLogo.png" alt="Logo" width={80} height={40} priority />
                </div>
            </div>

            <div className={styles.videoContainer} onClick={toggleFullscreen}>
                <video
                    className={isFullscreen ? styles.fullscreenVideo : styles.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/HeroCard.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>


            {isFullscreen && (
                <div className={styles.fullscreenVideoContainer} onClick={toggleFullscreen}>
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
        </div>
    );
};

export default Hero;
