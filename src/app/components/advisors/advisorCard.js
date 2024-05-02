import React from 'react';
import Image from "next/image";

const AdvisorCard = ({ src, alt, name, role, description }) => {
    return (
        <div style={{width:300}}>
            <div style={{height:350, width:300, backgroundColor:"#fff", borderRadius:12}}>
                {src && <Image
                    src={src}
                    alt={alt}
                    width={300}
                    height={350}
                    priority
                />}
            </div>
            <div style={{display: "flex", justifyContent: "space-between", marginTop:30}}>
                <p>{name}</p>
                <p>{role}</p>
            </div>
            <p style={{marginTop:60}}>{description}</p>
        </div>
    );
};

export default AdvisorCard;
