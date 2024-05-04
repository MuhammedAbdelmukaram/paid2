import React from "react";
import Image from "next/image";

const AdvisorCard = ({ src, alt, name, role, description }) => {
  return (
    <div style={{ width: 250 }}>
      <div
        style={{
          height: 300,
          width: 250,
          backgroundColor: "#fff",
          borderRadius: 12,
        }}
      >
        {src && <Image src={src} alt={alt} width={250} height={300} priority />}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <p>{name}</p>
        <p>{role}</p>
      </div>
      {/* <p style={{marginTop: 60}}>{description}</p>*/}
    </div>
  );
};

export default AdvisorCard;
