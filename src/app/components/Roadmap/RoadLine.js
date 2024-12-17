"use client";
import React, {useState} from 'react';
import styles from './Roadline.module.css';
import Image from "next/image";

const RoadLine = () => {

    const [expandedItems, setExpandedItems] = useState(new Set());

    const [marginTop, setMarginTop] = useState(0); // Add state for dynamic margin



    const toggleItem = (id) => {
        let newExpandedItems = new Set(); // Create a new empty Set
        let newMarginTop = 0; // Default margin when no item is expanded

        // Check if the clicked item is already expanded, if yes, we will collapse it, if no, we will expand it
        if (expandedItems.has(id)) {
            // If the item is already expanded, clicking it again will collapse it, and newExpandedItems remains empty
            newMarginTop = 0; // Reset margin when collapsed
        } else {
            // If the item is not expanded, we add it to the Set of expanded items
            newExpandedItems.add(id);
            newMarginTop = 114; // Set new margin when expanded
        }

        setExpandedItems(newExpandedItems); // Update the expanded items state
        setMarginTop(newMarginTop); // Update the margin state
    };

    const items = [
        {
            id: 1,
            content: "Initial SPL Token Listing on DEX",
            weight: "Major Event",
            location: "Web2",
            highlighted: true,
            additionalContent: "Mark the debut of the PAID token on decentralized exchanges, a pivotal first step in our journey.",
        },
        {
            id: 2,
            content: "LLC Incorporation and Filings",
            weight: "Normal Event",
            location: "Web3",
            highlighted: true,
            additionalContent: "Establish the legal and corporate framework of PAID as a foundation for growth and legitimacy."
        },
        {
            id: 3,
            content: "Social Media Establishment",
            weight: "Minor Event",
            location: "Web2",
            highlighted: true,
            additionalContent: "Secure and verify our presence on major platforms to connect with our audience and build community."
        },
        {id: 4, content: "White Paper and Roadmap Reveal", weight: "Minor Event", location: "Web2", additionalContent: "Unveil our strategic plans and operational goals, providing transparency and vision."},
        {id: 5, content: "Team Introduction", weight: "Minor Event", location: "Web2", additionalContent: "Present our dedicated team, showcasing the expertise behind PAID"},
        {id: 6, content: "Website Launch", weight: "Minor Event", location: "Web2,", additionalContent: "Celebrate the launch of our central hub for information and interaction with our community."},
        {id: 7, content: "CEX Listings & SHOUT Campaign", weight: "Minor Event", location: "Web2", additionalContent: "Broaden our reach with listings on centralized exchanges and a robust marketing push."},
        {id: 8, content: "Telegram Trading Bots Listings", weight: "Minor Event", location: "Web2",additionalContent: "Announce our listing on premier Telegram trading bots, signaling a bullish endorsement and enhancing our visibility."},
        {id: 9, content: "OG's Influencer Engagement Campaign", weight: "Minor Event", location: "Web2",additionalContent: "These industry figures, with their substantial followings and respected opinions, will help amplify our message and bring credibility and visibility to our projects and tokens."},
        {id: 10, content: "1st PAID Revenue Product Launch", weight: "Minor Event", location: "Web2",additionalContent: "Introduce PUNKS, the first brand to embody our mission and ethos."},
        {id: 11, content: "1st $PAID Giveaway", weight: "Minor Event", location: "Web2",additionalContent: "Engage the community with the first of many giveaways, driving excitement and participation."},
        {id: 12, content: "Web 3 SaaS Reveal & Launch", weight: "Minor Event", location: "Web2",additionalContent: "Expand our technological footprint with cutting-edge software as a service offering."},
        {id: 13, content: "Mainstream Media & Influencer Engagement", weight: "Minor Event", location: "Web2",additionalContent: "Take our vision to a wider audience with targeted mainstream media campaigns and influencer partnerships."},
        {id: 14, content: "Revenue and Allocation Transparency", weight: "Minor Event", location: "Web2",additionalContent: "Showcase real-time earnings and transparent allocation to reinforce trust and accountability."},
        {id: 15, content: "WEB 2 Brand Reveal & Launch", weight: "Minor Event", location: "Web2",additionalContent: "Announce and launch our Web 2.0 brand, marking a significant expansion of our commercial ventures."},
        {id: 16, content: "Community-Driven Team Expansion", weight: "Minor Event", location: "Web2",additionalContent: "Strengthen our team with community talent, emphasizing inclusivity and shared growth."},
        {id: 17, content: "Continued Product/Brand Launches", weight: "Minor Event", location: "Web2", additionalContent: "Maintain momentum with subsequent brand launches, each a new opportunity for investors and consumers alike."},
    ];

    const getWeightIndicatorStyle = (weight) => {
        switch (weight) {
            case 'Major Event':
                return {backgroundColor: '#D2FF51', height: 12, width: 12, borderRadius: 20}; // Color for Major Event
            case 'Normal Event':
                return {backgroundColor: '#76E2AE', height: 12, width: 12, borderRadius: 20}; // Color for Normal Event
            case 'Minor Event':
                return {backgroundColor: '#8926EA', height: 12, width: 12, borderRadius: 20}; // Color for Minor Event
            default:
                return {}; // Default case
        }
    };

    const getLocationIndicatorStyle = (location) => {
        switch (location) {
            case 'Web2':
                return styles.triangleUp; // Class for Web2
            case 'Web3':
                return styles.triangleDown; // Class for Web3
            default:
                return ''; // Default case
        }
    };

    return (
        <div className={styles.roadmapContainer}>
            <div className={styles.backgroundContainer}>
                <Image src="/Back2.png" alt="Background 2" width={400} height={400} className={`${styles.backgroundImage} ${styles.back2}`} />
                <Image src="/Back3.png" alt="Background 3" width={400} height={400} className={`${styles.backgroundImage} ${styles.back3}`} />
                <Image src="/Back4.png" alt="Background 4" width={400} height={400} className={`${styles.backgroundImage} ${styles.back4}`} />
                <Image src="/Back1.png" alt="Background 1" width={700} height={700} className={`${styles.backgroundImage} ${styles.back1}`} />
            </div>

            {/* Your existing component content */}
            <Image src="/PaidGreenCr.png" alt="Copy Icon" width={52} height={52} priority />
            {items.map((item, index) => (
                <div key={item.id} className={styles.componentWrapper}>
                    {index % 2 === 0 ? (
                        <>
                            <div style={{display:"flex", flexDirection:"column", marginTop: expandedItems.has(item.id) ? marginTop : 8}}>
                                <div
                                    className={`${styles.leftComponent} ${item.highlighted ? styles.highlighted : ''} ${expandedItems.has(item.id) ? styles.expandedComponent : ''}`}
                                    onClick={() => toggleItem(item.id)}
                                    style={{borderColor: item.highlighted ? '#2BEA2A' : '#fff'}}
                                >
                                    <div style={{display: "flex", alignItems: "center", justifyContent:"space-between", width:"100%"}}>
                                        <p style={{width: expandedItems.has(item.id) ? "100%" : "100%"}}>{item.content}</p>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                            gap: 24
                                        }}>
                                            <div style={getWeightIndicatorStyle(item.weight)}
                                                 className={styles.indicator}></div>
                                            <div className={getLocationIndicatorStyle(item.location)}></div>
                                        </div>
                                    </div>

                                </div>
                                {expandedItems.has(item.id) && (
                                    <div style={{width: "450px", height:106, backgroundColor:"#242424", padding:20}}>
                                        <p>{item.additionalContent}</p>
                                    </div>
                                )}
                            </div>
                            <div className={styles.connectingLine}
                                 style={{backgroundColor: item.highlighted ? '#2BEA2A' : '#fff'}}></div>
                            <div className={styles.roadLine}
                                 style={{backgroundColor: item.highlighted ? '#2BEA2A' : '#fff'}}></div>
                            <div className={styles.emptyComponent}></div>
                        </>
                    )  : (
                        <>
                            <div className={styles.emptyComponent}></div>
                            <div className={styles.roadLine}
                                 style={{backgroundColor: item.highlighted ? '#2BEA2A' : '#fff'}}></div>
                            <div className={styles.connectingLine}
                                 style={{backgroundColor: item.highlighted ? '#2BEA2A' : '#fff'}}></div>
                            <div className={`${styles.rightComponent} ${item.highlighted ? styles.highlighted : ''}`}
                                 style={{borderColor: item.highlighted ? '#2BEA2A' : '#fff'}}>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    gap: 24
                                }}>
                                    <div style={getWeightIndicatorStyle(item.weight)}
                                         className={styles.indicator}></div>
                                    <div className={getLocationIndicatorStyle(item.location)}></div>
                                </div>
                                <p>{item.content}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RoadLine;