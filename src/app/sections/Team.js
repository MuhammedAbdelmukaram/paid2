import React from "react";
import EarnedMoney from "@/app/components/team/EarnedMoney";

const Team = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-start",
        padding: "20px 10%",
        marginTop: 160,
      }}
      id="team"
    >
      <p style={{ fontSize: 44 }}>MEET THE TEAM</p>
      <p style={{ fontSize: 16, color: "#2BEA2A" }}>
        Mooning in everything we do
      </p>

      <EarnedMoney />
    </div>
  );
};

export default Team;
