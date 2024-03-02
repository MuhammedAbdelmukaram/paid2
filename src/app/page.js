import Image from "next/image";
import styles from "./page.module.css";
import LoadingScreen from "@/app/components/LoadingScreen";
import AnnouncementBar from "@/app/sections/AnnouncementBar";
import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import TokenAddress from "@/app/sections/TokenAddress";
import Benefits from "@/app/sections/Products";
import Invest from "@/app/sections/Invest";
import Tokenomics from "@/app/sections/Tokenomics";
import Roadmap from "@/app/sections/Roadmap";
import RoadLine from "@/app/components/Roadmap/RoadLine";
import Footer from "@/app/sections/Footer";
import HowToBuy from "@/app/sections/HowToBuy";
import Advisors from "@/app/sections/Advisors";
import EarnedMoney from "@/app/components/team/earnedMoney";


{/*<LoadingScreen/>*/
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div style={{zIndex: 1}}>
                <Image
                    src="/Light3.png"
                    alt="Logo"
                    width={500}
                    height={1000}
                    priority
                />
            </div>
            <div style={{position: "absolute", width: "100vw", display: "flex", flexDirection: "column"}}>
                <AnnouncementBar/>
                <Header/>
                <Hero/>
                <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: 10}}>
                    <TokenAddress/>
                </div>

            </div>
            <div style={{height: 30, width: "100%", backgroundColor: "#fff", marginTop: 10}}>

            </div>
            <Benefits/>
            <Invest/>
            <Tokenomics/>
            <Roadmap/>
            <div>
                <RoadLine/>
            </div>
            <EarnedMoney/>
            <Advisors/>
            <HowToBuy/>
            <Footer/>


        </main>
    );
}
