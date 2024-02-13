import Image from "next/image";
import styles from "./page.module.css";
import LoadingScreen from "@/app/components/LoadingScreen";
import AnnouncementBar from "@/app/sections/AnnouncementBar";
import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import TokenAddress from "@/app/sections/TokenAddress";


{/*<LoadingScreen/>*/
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.backgroundImage}></div> {/* Background image */}
            <AnnouncementBar/>
            <Header/>
            <Hero/>
            <TokenAddress/>





        </main>
    );
}
