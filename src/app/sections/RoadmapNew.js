import React from 'react';
import Image from "next/image";

const RoadmapNew = () => {
    return (
        <div style={{
            width: "100%",
            padding: "20px 10%",
            marginTop: 160,
            display: "flex",
            flexDirection: "column",
            alignItems: "center" // Aligns everything centrally
        }} id={"roadmap"} >
            <p style={{fontSize: 38, marginBottom: 0}}>
                ROADMAP
            </p>

            <p style={{color: "#2BEA2A"}}>
                The Only Roadmap That Doesn’t End!
            </p>

            <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginTop:20}}>
                <Image
                    src="/RoadmapPlaceholder.png"
                    alt="Roadmap Image"
                    width={800}
                    height={800}
                    priority
                />
            </div>
        </div>
    );
};

export default RoadmapNew;