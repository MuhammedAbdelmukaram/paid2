"use client";
import React, {useState} from 'react';
import styles from './Roadline.module.css';
import Image from "next/image";

const RoadLine = () => {

    const [expandedItems, setExpandedItems] = useState(new Set());

    const [marginTop, setMarginTop] = useState(0); // Add state for dynamic margin



    const toggleItem = (id, initialHeight = 54, expandedHeight = 76) => { // Assuming 200px is the expansion
        const newExpandedItems = new Set(expandedItems);
        let newMarginTop = marginTop;

        if (newExpandedItems.has(id)) {
            newExpandedItems.delete(id);
            newMarginTop = 0; // Reset margin when collapsed
        } else {
            newExpandedItems.add(id);
            newMarginTop = expandedHeight - initialHeight; // Set new margin
        }

        setExpandedItems(newExpandedItems);
        setMarginTop(newMarginTop); // Update the margin state
    };

    const items = [
        {
            id: 1,
            content: "Initial SPL Token Listing on DEX",
            weight: "Major Event",
            location: "Web2",
            highlighted: true,
            additionalContent: "More details about SPL Token Listing...",
        },
        {
            id: 2,
            content: "LLC Incorporation and Filings",
            weight: "Normal Event",
            location: "Web3",
            highlighted: true,
            additionalContent: "More details about SPL Token Listing..."
        },
        {
            id: 3,
            content: "Social Media Establishment",
            weight: "Minor Event",
            location: "Web2",
            highlighted: true,
            additionalContent: "More details about SPL Token Listing..."
        },
        {id: 4, content: "White Paper and Roadmap Reveal", weight: "Minor Event", location: "Web2"},
        {id: 5, content: "Team Introduction", weight: "Minor Event", location: "Web2"},
        {id: 6, content: "Website Launch", weight: "Minor Event", location: "Web2"},
        {id: 7, content: "CEX Listings & SHOUT Campaign", weight: "Minor Event", location: "Web2"},
        {id: 8, content: "Telegram Trading Bots Listings", weight: "Minor Event", location: "Web2"},
        {id: 9, content: "OG's Influencer Engagement Campaign", weight: "Minor Event", location: "Web2"},
        {id: 10, content: "1st PAID Revenue Product Launch", weight: "Minor Event", location: "Web2"},
        {id: 11, content: "1st $PAID Giveaway", weight: "Minor Event", location: "Web2"},
        {id: 12, content: "Web 3 SaaS Reveal & Launch", weight: "Minor Event", location: "Web2"},
        {id: 13, content: "Mainstream Media & Influencer Engagement", weight: "Minor Event", location: "Web2"},
        {id: 14, content: "Revenue and Allocation Transparency", weight: "Minor Event", location: "Web2"},
        {id: 15, content: "WEB 2 Brand Reveal & Launch", weight: "Minor Event", location: "Web2"},
        {id: 16, content: "Community-Driven Team Expansion", weight: "Minor Event", location: "Web2"},
        {id: 17, content: "Continued Product/Brand Launches", weight: "Minor Event", location: "Web2"},
        // Add more items here
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
            <Image
                src="/PaidGreenCr.png"
                alt="Copy Icon"
                width={52}
                height={52}
                priority
            />
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
                                    <div style={{width: "100%",  backgroundColor:"#f60000"}}>
                                        <p>Hey</p>
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