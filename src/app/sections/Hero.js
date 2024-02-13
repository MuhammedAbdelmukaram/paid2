import Image from "next/image";
import Header from "@/app/sections/Header";


const Hero = () => {
    return (
<div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:70, marginTop:30, }}>

    <div>
        <div style={{display:"flex", flexDirection:"column"}}>

            <p style={{fontSize:148, lineHeight:"0.9"}}>GET</p>
            <p style={{fontSize:148, color:"#2BEA2A", fontWeight:"bold" , lineHeight:"0.9"}}>$PAID</p>

        </div>

        <div style={{width:"95%", marginTop:30}}>
            <p style={{fontSize:20}}>We Continue To Give Back to Holders Through Scale!</p>
        </div>

        <div style={{display:"flex",gap:40, marginTop:30}}>
            <button style={{padding:"14px 40px 14px 40px", backgroundColor:"#323232", border:"none", borderRadius:4}}>
                Buy Now
            </button>

            <button style={{padding:"14px 40px 14px 40px", backgroundColor:"#fff", border:"none", borderRadius:4, color:"#000"}}>
                Buy Now
            </button>
        </div>

        <div style={{width:"80%", height:2, backgroundColor:"#fff", marginTop:20}}>

        </div>

        <div style={{display:"flex", gap:40 }}>

            <Image
                src="/Jupiter.svg"
                alt="Logo"
                width={150}
                height={100}
                priority
            />
            <div style={{marginLeft:"-8px"}}>
                <Image
                    src="/SolFloare.png"
                    alt="Logo"
                    width={150}
                    height={100}
                    priority
                />
            </div>
            <Image
                src="/SolFoundation.svg"
                alt="Logo"
                width={150}
                height={100}
                priority
            />

        </div>
    </div>

    <div style={{}}>
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{width: '610px', height: 'auto'}} // Adjust as needed
        >
            <source src="/GameOn.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>

</div>
    );
};

export default Hero;