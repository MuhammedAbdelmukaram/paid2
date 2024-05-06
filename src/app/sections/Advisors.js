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
                    src="/Person1.png"
                    alt="Advisor Portrait"
                    name="Lorem Ipsum"
                    role="CFO"
                    description="Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing because this is dummy text"
                />
                <AdvisorCard
                    src="/Person2.jpg"
                    alt="Advisor Portrait"
                    name="Dolor Sit"
                    role="CTO"
                    description="Dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                />
                <AdvisorCard
                    src="/Person3.png"
                    alt="Advisor Portrait"
                    name="Amet Consectetur"
                    role="CEO"
                    description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <AdvisorCard
                    src="/Person4.png"
                    alt="Advisor Portrait"
                    name="Amet Consectetur"
                    role="CEO"
                    description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>

            <MetricsDashboard/>

        </div>
    );
};

export default Advisors;
