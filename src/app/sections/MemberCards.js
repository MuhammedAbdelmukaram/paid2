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
                <p className={styles.heading}>PAID MEMBER CARDS</p>
                <p className={styles.subHeading}>Members Only Cabal <span className={styles.pressText}>Tap Card For Surprise :)</span></p>

            </div>
            <LeftSideCard
                title="Entry Member Card"
                totalAvailable="?"
                balance="?"
                description="Exclusive & Limited Collection of Paid Cards available through SPL404 Swap.
Swapping into one grants Exclusive access to the PAID Cabal. Making you a $PAID Whale.  "
                resaleInfo="Higher Tier = Bigger $PAID Token Swap Amount Required"
                videoSrc="/blackCard.mp4"
                borderColor={"#2BEA2A"}
            />
            <RightSideCard
                title="Green Member Card"
                totalAvailable="?"
                balance="xxx"
                description="Each Member Card Grants you Access to exclusive opportunities to get PAID.
Enables trading large quantities of $PAID without dumping on holders."
                resaleInfo="Will be listed on Magic Eden, Tensor & Sol Sniper for Secondary Trading."
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
                description="As Days pass Staked Member Cards gain XP as a reward for loyalty (staking)."
                descriptionTwo="As Discount Code Buys(applied discount and bought) Come in, Member Card get Kickbacks and XP Rewards"
                resaleInfo="Higher Tier Member Cards Grant Access to Higher % Discount Codes.."
                videoSrc="/emeraldCard.mp4"
                borderColor={"#25693D"}
            />
        </div>
    );
};

export default MemberCards;