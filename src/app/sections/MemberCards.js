import React from 'react';
import LeftSideCard from "@/app/components/memberCards/LeftSideCard";
import RightSideCard from "@/app/components/memberCards/RightSideCard";
import styles from "@/app/sections/Products.module.css";
import Image from "next/image";

const MemberCards = () => {
    return (
        <div style={{width:"100%", marginTop:100}} id={"membercards"}>
            <div className={styles.headingSection}>
                <Image
                    src="/whitelogo.png"
                    alt="Copy Icon"
                    width={76}
                    height={76}
                    priority
                />
                <p className={styles.heading}>PAID INC. MEMBER CARDS</p>
                <p className={styles.subHeading}>This is Your Way In!</p>

            </div>
            <LeftSideCard
                title="Entry Member Card"
                totalAvailable="?"
                balance="?"
                description="Paid Inc. Member Cards will be available for Purchase via NFC/QR Code/Public Resale."
                resaleInfo="Afterwards, they will be listed on Tensor, Sol Sniper and Magic Eden for Secondary Trading."
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
                description="Paid Inc. Member Cards will be available for Purchase via NFC/QR Code/Public Resale."
                resaleInfo="Afterwards, they will be listed on Tensor, Sol Sniper and Magic Eden for Secondary Trading."
                videoSrc="/platCard.mp4"
                borderColor="#D9D9D9" // Example: Passing a Tomato color border
            />

            <LeftSideCard
                title="Emerald Member Card"
                totalAvailable="?"
                balance="xxx"
                description="Member Cards come with (Unique to the Member Card) Discount Codes that can be applied across our Revenue Generating Products."
                resaleInfo="Higher Tier/Rarity Member Cards Grant Access to Higher % Discount Codes.."
                videoSrc="/emeraldCard.mp4"
                borderColor={"#25693D"}
            />
        </div>
    );
};

export default MemberCards;