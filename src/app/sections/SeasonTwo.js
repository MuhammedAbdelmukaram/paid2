import React from "react";
import styles from "./SeasonTwo.module.css";
import Image from "next/image";

const SeasonTwo = () => {
    const currentXP = 2344;
    const totalXP = 5000;
    const xpPercentage = (currentXP / totalXP) * 100;

    return (
        <div className={styles.wrapper}>
            <div className={styles.seasonTwoContainer}>
                <h1 className={styles.heading}>SEASON TWO</h1>
                <h2 className={styles.subheading}>3SQUARES</h2>
                <div className={styles.texts}>


                    <p className={styles.paragraph}>
                        XP will Play a Crucial Role in Development of sPAID
                        <br/>
                        Advice: Make sure to stake your Member Cards.
                    </p>
                    <p className={styles.italicParagraph}>
                        We deem Loyalty as the Highest form of Flattery
                        <br/>
                        And Plan to Reward it Appropriately.
                    </p>
                </div>

                <div className={styles.xpBarContainer}>
                    <div className={styles.xpBar} style={{ width: `${xpPercentage}%` }}></div>
                    <div className={styles.xpText}>{`${currentXP}/${totalXP}`}</div>
                </div>
            </div>

            <Image
                src="/SeasonTwoGuy.png"
                alt="Previous"
                width={400}
                height={400}
            />

        </div>
    );
};

export default SeasonTwo;
