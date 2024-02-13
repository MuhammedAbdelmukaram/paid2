import React from 'react';
import Image from "next/image";

const TokenAddress = () => {
    return (
        <div style={{width:"72%",  backgroundColor: "rgba(50, 50, 50, 0.5)", color:"#fff", borderRadius:100,
            padding:"12px 30px 12px 30px", display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between",
            cursor:"pointer", marginTop:64, zIndex:2}}>

            <div style={{display:"flex", cursor:"pointer", alignItems:"center", flexDirection:"row"}}>
                <p>
                    Token Address:
                </p>

                <p style={{marginLeft:80}}>
                    7VtwS9yrHjL19UdBHotVQuerxbpGkA3vo5BHz8zYWGpP7VtwS9yrHjL19UdBHotVQuerxbpGkA3vo5BHz8zYWGpP
                </p>
            </div>

            <Image
                src="/copy.png"
                alt="Logo"
                width={16}
                height={16}
                priority
            />





        </div>
    );
};

export default TokenAddress;