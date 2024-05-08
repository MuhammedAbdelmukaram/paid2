import React from 'react';
import LeftSideCard from "@/app/components/memberCards/LeftSideCard";
import RightSideCard from "@/app/components/memberCards/RightSideCard";
import styles from "@/app/sections/Products.module.css";
import Image from "next/image";

const MemberCards = () => {
    return (
        <div style={{width: "100%", marginTop: 170}} id={"membercards"}>
            <div className={styles.headingSection}>
                <Image
                    src="/whitelogo.png"
                    alt="Copy Icon"
                    width={76}
                    height={76}
                    priority
                />
                <p className={styles.heading}>PAID INC. MEMBER CARDS</p>
                <p className={styles.subHeading}>This is Your Way In! <span className={styles.pressText}>Press and see more :)</span></p>

            </div>
            <LeftSideCard
                title="Entry Member Card"
                totalAvailable="?"
                balance="?"
                description="Paid Inc. Member Cards will be available for Purchase via FCFS Public Presale. "
                resaleInfo="Afterwards, they will be Listed on Tensor, Sol Sniper and Magic Eden for Secondary Trading. "
                videoSrc="/blackCard.mp4"
                borderColor={"#2BEA2A"}
            />
            <RightSideCard
                title="Green Member Card"
                totalAvailable="?"
                balance="xxx"
                description="Each Member Card Grants you Access to a Predetermined Number of $PAID Tokens."
                resaleInfo="Higher Tier/Rarity = Bigger $PAID Token Allocation Member Card contains."
                videoSrc="/greenCard.mp4"
                borderColor={"#15A12B"}
            />

            <LeftSideCard
                title="Gold Member Card"
                totalAvailable="?"
                balance="xxx"
                description="Member Cards come with (Unique to the Member Card) Discount Codes that can be applied across our Revenue Generating Products."
                resaleInfo="Higher Tier/Rarity Member Cards Grant Access to Higher % Discount Codes.."
                videoSrc="/goldCard.mp4"
                borderColor={"#B18A49"}
            />

            <RightSideCard
                title="Platinum Member Card"
                totalAvailable="?"
                balance="?"
                description="Discount Codes Only become Active when the Member Card is Staked (staking released post-mint). Unlocking the Discount Code, for the Holder, his Friends, and Family to freely use."
                descriptionTwo="Each time said Discount Code is used, That Member Card gets Rewarded with a % Kickback of the Sale it Generated."
                resaleInfo="Higher Tier/Rarity Member Cards Grant Access to Higher % Kickback."
                videoSrc="/platCard.mp4"
                borderColor="#D9D9D9" // Example: Passing a Tomato color border
            />

            <LeftSideCard
                title="Emerald Member Card"
                totalAvailable="?"
                balance="xxx"
                description="Every 14 days that pass, Staked Member Cards gain 1000 XP as a reward for loyalty (staking)."
                descriptionTwo="Each time said Member Card Discount Code reaches 25 successful uses (applied discount and bought). You get rewarded with 25,000 XP."
                resaleInfo="Higher Tier/Rarity Member Cards Grant Access to Higher % Discount Codes.."
                videoSrc="/emeraldCard.mp4"
                borderColor={"#25693D"}
            />
        </div>
    );
};

export default MemberCards;