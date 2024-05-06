import React, { useState, useEffect, useRef } from "react";
import styles from "./SeasonTwo.module.css";
import Image from "next/image";

const SeasonTwo = () => {
    const [xpState, setXpState] = useState({
        level: 1,
        currentXP: 0,
        totalXP: 5000,
        startXP: 0
    });

    const observerRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setIsActive(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            setXpState(prevState => {
                let { level, currentXP, totalXP, startXP } = prevState;
                currentXP += 100;

                if (currentXP >= totalXP) {
                    if (level < 5) {
                        const newTotalXP = totalXP * 2;
                        level += 1;
                        startXP = totalXP;
                        totalXP = newTotalXP;
                    } else {
                        currentXP = totalXP;
                    }
                }

                return { level, currentXP, totalXP, startXP };
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isActive]);

    // Calculate the percentage based on excess XP from the startXP
    const xpPercentage = ((xpState.currentXP - xpState.startXP) / (xpState.totalXP - xpState.startXP)) * 100;

    return (
        <div ref={observerRef} className={styles.wrapper} id={"seasontwo"}>
            <div className={styles.seasonTwoContainer}>
                <h1 className={styles.heading}>SEASON TWO</h1>
                <h2 className={styles.subheading}>3SQUARES</h2>
                <div className={styles.texts}>
                    <p className={styles.paragraph}>
                        <span style={{color:"#2be62c"}}>XP</span> will Play a Crucial Role in Development of sPAID
                        <br/>
                        Advice:  <span style={{color:"#2be62c"}}>Make sure to stake your Member Cards.</span>
                    </p>
                    <p className={styles.italicParagraph}>
                        We deem Loyalty as the Highest form of Flattery
                        <br/>
                        And Plan to Reward it Appropriately.
                    </p>
                </div>

                <div className={styles.xpBarContainer}>
                    <div className={styles.xpBar} style={{ width: `${xpPercentage}%` }}></div>
                    <div className={styles.xpText}>{`Level ${xpState.level}: ${xpState.currentXP}/${xpState.totalXP}`}</div>
                </div>
                <p style={{marginTop: 40, fontStyle: "italic"}}>More info TBA!</p>
            </div>

            <Image
                src="/SeasonTwoGuy.png"
                alt="Previous"
                width={400}
                height={400}
                style={{zIndex:2}}
            />
        </div>
    );
};

export default SeasonTwo;
