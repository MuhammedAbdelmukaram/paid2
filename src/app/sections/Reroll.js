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
            <div style={{width:"100%", height:4, backgroundColor:"#2be82b", marginTop:10}}>

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
            <p style={{fontSize:12, color:"#2be62c"}}>$PAID Token Liquidity Pool will be Setup after FCFS Public Presale Event</p>
            <div style={{textAlign:"center", width:"25%", marginTop:26, display:"flex", flexDirection:"column", gap:14, fontSize:20, }}>
                <p>Got the Entry Level Card?</p>
                <p>Swap it (NFT) for $PAID Tokens, then Re-Roll Back to NFT to get a Brand New Randomized Rarity Card</p>
                <p>Yes, from Gold to Diamond, or Diamond back to Entry Level Member Card!</p>
            </div>

        </div>
    );
};

export default Reroll;
