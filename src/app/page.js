"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LoadingScreen from "@/app/components/LoadingScreen";
import AnnouncementBar from "@/app/sections/AnnouncementBar";
import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import TokenAddress from "@/app/sections/TokenAddress";
import Benefits from "@/app/sections/Products";
import Invest from "@/app/sections/Invest";
import Tokenomics from "@/app/sections/Tokenomics";
import Carousel from "@/app/sections/Carousel";
import RoadLine from "@/app/components/Roadmap/RoadLine";
import Footer from "@/app/sections/Footer";
import HowToBuy from "@/app/sections/HowToBuy";
import Advisors from "@/app/sections/Advisors";
import EarnedMoney from "@/app/components/team/EarnedMoney";
import Team from "@/app/sections/Team";
import MemberCards from "@/app/sections/MemberCards";
import Reroll from "@/app/sections/Reroll";
import SeasonTwo from "@/app/sections/SeasonTwo";
import RoadmapNew from "@/app/sections/RoadmapNew";
import FAQ from "@/app/sections/FAQ";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

{
    /*<LoadingScreen/>*/
}

export default function Home() {
    const audioRef = useRef(null);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoadedImg, setIsLoadedImg] = useState(false);
    const songs = [
        { src: "/GetPaidAnthemn.mp3", title: "Get Paid", artist: "Young Dolph" },
        { src: "/StaySchemin.mp3", title: "Stay Schemin", artist: "Rick Ross" },
    ];

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tools.luckyorange.com/core/lo.js?site-id=97cedfd3";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const playNext = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(nextIndex);
        setIsPlaying(false);
    };

    const playPrevious = () => {
        const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        setCurrentSongIndex(prevIndex);
        setIsPlaying(false);
    };

    // Ensure the audio source is updated when the song changes
    if (audioRef.current) {
        audioRef.current.src = songs[currentSongIndex].src;
        if (isPlaying) {
            audioRef.current.play();
        }
    }

    const handleImageLoad = (event) => {
        console.log(event.target.complete);
        setIsLoadedImg(true);
    };

    return (
        <>
            {!isLoadedImg && <LoadingScreen />}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.3 }}
            >
            <main className={styles.main} style={{ opacity: !isLoadedImg ? 0 : 1 }}>
                <div style={{ zIndex: 1 }}></div>
                <div
                    style={{ width: "100vw", display: "flex", flexDirection: "column" }}
                >
                    <AnnouncementBar />
                    <Header handleImageLoad={handleImageLoad} />
                    <Hero handleImageLoad={handleImageLoad} />
                </div>

                <div className={styles.hoverableDiv} onClick={togglePlay}></div>

                {
                    <div
                        style={{
                            position: "fixed",
                            bottom: "10px",
                            right: "10px",
                            width: "330px",
                            height: "60px",
                            backgroundColor: "rgba(42, 42, 42, 0.8)",
                            borderRadius: "12px",
                            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start", // Distribute space between icons
                            zIndex: 100,
                        }}
                    >
                        <Image
                            src="/SoundBars.png"
                            width={33}
                            height={33}
                            style={{
                                cursor: "pointer",
                                position: "absolute",
                                left: 20,
                                top: "50%",
                                transform: "translateY(-50%)",
                            }}
                            onLoad={handleImageLoad}
                        />

                        <div style={{ marginLeft: 68, width: 125 }}>
                            <p style={{ fontSize: 12 }}>{songs[currentSongIndex].artist}</p>
                            <p style={{ fontSize: 14 }}>{songs[currentSongIndex].title}</p>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                gap: 10,
                                marginLeft: 28,
                                alignItems: "center",
                            }}
                        >
                            <Image
                                src="/previous.png"
                                alt="Previous"
                                width={23}
                                height={23}
                                onClick={playPrevious}
                                style={{ cursor: "pointer" }}
                                onLoad={handleImageLoad}
                            />
                            <Image
                                src={isPlaying ? "/pause.png" : "/play.png"}
                                alt="Play/Pause"
                                width={23}
                                height={23}
                                onClick={togglePlay}
                                style={{ cursor: "pointer" }}
                                onLoad={handleImageLoad}
                            />
                            <Image
                                src="/next.png"
                                alt="Next"
                                width={23}
                                height={23}
                                onClick={playNext}
                                style={{ cursor: "pointer" }}
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>
                }

                <audio ref={audioRef} preload="auto"></audio>

                <Benefits />

                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    {/* Background image with adjusted positioning */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                        {/* Image positioned relative to Carousel and behind it */}
                        <Image
                            src="/Astronaut.png"
                            alt="Astronaut"
                            layout="fill"
                            objectFit="contain"
                            style={{
                                position: "absolute",
                                top: -210,
                                left: 800,
                                width: "100%",
                                height: "100%",
                                zIndex: -1,
                            }}
                        />
                        <Carousel />
                    </div>
                    <div style={{ zIndex: 4 }}>
                        <MemberCards />
                        <Reroll />
                    </div>
                    <div className={styles.gradientBackground}>
                        {/*<RoadmapNew/>*/}
                        <SeasonTwo />
                        {/*<Team/>*/}
                        {/*<Advisors/>*/}
                    </div>
                    <FAQ />
                    <Footer />
                </div>
            </main>
            </motion.div>
        </>
    );
}
