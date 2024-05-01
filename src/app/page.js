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
import EarnedMoney from "@/app/components/team/EarnedMoney";
import Team from "@/app/sections/Team";


{/*<LoadingScreen/>*/
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div style={{zIndex: 1}}>

            </div>
            <div style={{ width: "100vw", display: "flex", flexDirection: "column"}}>
                <AnnouncementBar/>
                <Header/>
                <Hero/>


            </div>

            <Benefits/>

            {/*<Invest/>
                <Tokenomics/>
                <Roadmap/>*/}
            <div style={{
                width:"100%",
                height:"100%",
            }}>
                <RoadLine/>
                <Team/>
                <Advisors/>
                <HowToBuy/>
                <Footer/>
            </div>


        </main>
    );
}
