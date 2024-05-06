import React from "react";
import Image from "next/image";

const AdvisorCard = ({ src, alt, name, role, description }) => {
  return (
    <div style={{ width: "fit-content", backgroundColor:"#110f0f", borderRadius:12 }}>
      <div
        style={{
          height: 300,
          width: 250,
          backgroundColor: "#fff",
          borderRadius: 12,
        }}
      >
        {src && <Image src={src} alt={alt} width={254} height={300} style={{objectFit:"cover"}} priority />}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 4,
            marginBottom:0,
            padding:12,
            color:"white"
        }}
      >
        <p>{name}</p>
        <p style={{color:"#2be82b"}}>{role}</p>
      </div>
      {/* <p style={{marginTop: 60}}>{description}</p>*/}
    </div>
  );
};

export default AdvisorCard;
