import React from "react";
import AdvisorCard from "@/app/components/advisors/advisorCard";
import styles from "./Advisors.module.css";
import EarnedMoney from "@/app/components/team/EarnedMoney";
import MetricsDashboard from "@/app/components/team/MetricsDashboard";

const Advisors = () => {
    return (
        <div className={styles.advisorsContainer}>
            <div className={styles.flexContainer}>


                <AdvisorCard
                    src="/Person4.png"
                    alt="Advisor Portrait"
                    name="Busy"
                    role="CEO"
                    description="Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing because this is dummy text"
                />
                <AdvisorCard
                    src="/Person2.jpg"
                    alt="Advisor Portrait"
                    name="Fiske"
                    role="COO"
                    description="Dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                />
                <AdvisorCard
                    src="/Person3.png"
                    alt="Advisor Portrait"
                    name="Deity"
                    role="CTO"
                    description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <AdvisorCard
                    src="/Person1.jpg"
                    alt="Fiske"
                    name="Dra"
                    role="CCO"
                    description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>

            <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center", padding:"12px 24px 24px 24px"}}>
                <p style={{fontSize:13}}>
                    Our Impressive Track Record of Scaling Web 2 Brands to 7 Figures is a Testament to our Success, We here to dominate Web 3 Commerce.
                </p>
            </div>

            {/*<MetricsDashboard/>*/}

        </div>
    );
};

export default Advisors;
