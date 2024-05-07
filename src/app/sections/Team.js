import React from "react";
import EarnedMoney from "@/app/components/team/EarnedMoney";
import styles from "./Team.module.css"
const Team = () => {
  return (
    <div
        className={styles.wrapper}

      id="team"
    >
      <p style={{ fontSize: 44, color:"#fff" }}>MEET THE TEAM</p>
      <p style={{ fontSize: 16, color: "#2BEA2A" }}>
        Mooning in everything we do
      </p>


    </div>
  );
};

export default Team;
