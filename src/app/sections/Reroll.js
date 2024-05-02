import React from 'react';
import styles from "@/app/sections/Products.module.css";
import Image from "next/image";

const Reroll = () => {
    return (
        <div className={styles.rerollContainer} id={"reroll"}>
            <div className={styles.headingSection}>
                <Image
                    src="/whitelogo.png"
                    alt="Copy Icon"
                    width={76}
                    height={76}
                    priority
                />
                <p className={styles.heading}>RE ROLL</p>
                <p className={styles.subHeading}>Enabled by SPL 404 & Mutantmon</p>
            </div>
            <div className={styles.videoContainer}>
                <video className={styles.videoElement}  autoPlay
                       loop
                       muted
                       playsInline >
                    <source src="/fizzle.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Reroll;
