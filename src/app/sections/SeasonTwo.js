import React from "react";
import styles from "./SeasonTwo.module.css";

const SeasonTwo = () => {
  return (
    <div className={styles.seasonTwoContainer}>
      <h1 className={styles.heading}>SEASON TWO</h1>
      <h2 className={styles.subheading}>3SQUARES</h2>
      <p className={styles.paragraph}>
        XP will Play a Crucial Role in Development of sPAID
        <br />
        Advice: Make sure to stake your Member Cards.
      </p>
      <p className={styles.italicParagraph}>
        We deem Loyalty as the Highest form of Flattery
        <br />
        And Plan to Reward it Appropriately.
      </p>
    </div>
  );
};

export default SeasonTwo;
