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
import Carousel from "@/app/sections/Carousel";
import RoadLine from "@/app/components/Roadmap/RoadLine";
import Footer from "@/app/sections/Footer";
import HowToBuy from "@/app/sections/HowToBuy";
import Advisors from "@/app/sections/Advisors";
import EarnedMoney from "@/app/components/team/EarnedMoney";
import Team from "@/app/sections/Team";
import MemberCards from "@/app/sections/MemberCards";
import Reroll from "@/app/sections/Reroll";
import SeasonTwo from "@/app/sections/SeasonTwo";
import RoadmapNew from "@/app/sections/RoadmapNew";
import FAQ from "@/app/sections/FAQ";


{/*<LoadingScreen/>*/
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div style={{zIndex: 1}}>

            </div>
            <div style={{width: "100vw", display: "flex", flexDirection: "column"}}>
                <AnnouncementBar/>
                <Header/>
                <Hero/>
            </div>

            <div style={{width: "100%", height: "20px", marginTop: 90, backgroundColor: "#fff"}}>

            </div>
            <Benefits/>

            {/*<Invest/>
                <Tokenomics/>
                <Roadmap/>*/}
            <div style={{
                width: "100%",
                height: "100%",
            }}>

                <Carousel/>
                {/*<RoadLine/>*/}

                <MemberCards/>
                <Reroll/>

                <RoadmapNew/>

                <SeasonTwo/>

                <Team/>
                <Advisors/>

                <FAQ/>

                <Footer/>
            </div>


        </main>
    );
}
