import React from 'react';
import styles from './Roadline.module.css';
import Image from "next/image";

const RoadLine = () => {
    const items = [
        { id: 1, content: "Initial SPL Token Listing on DEX" },
        { id: 2, content: "Item 2" },
        { id: 1, content: "Initial SPL Token Listing on DEX" },
        { id: 2, content: "Item 2" },
        { id: 1, content: "Initial SPL Token Listing on DEX" },
        { id: 2, content: "Item 2" },
        // Add more items here
    ];

    return (
        <div className={styles.roadmapContainer}>
            <Image
                src="/PaidGreenCr.png"
                alt="Copy Icon"
                width={72}
                height={72}
                priority
            />
            {items.map((item, index) => (
                <div key={item.id} className={styles.componentWrapper}>
                    {index % 2 === 0 ? (
                        <>
                            <div className={styles.leftComponent}>
                                {/* Connects left component to the central line */}

                                <p>{item.content}</p>
                                <div className={styles.triangleUp}></div>
                                <div className={styles.triangleDown}></div>
                            </div>
                            <div className={styles.connectingLine} ></div>
                            <div className={styles.roadLine}></div>
                            <div className={styles.emptyComponent}></div>
                        </>
                    ) : (
                        <>
                            <div className={styles.emptyComponent}></div>
                            <div className={styles.roadLine}></div>
                            <div className={styles.connectingLine} ></div>
                            <div className={styles.rightComponent}>
                                {/* Connects right component to the central line */}

                                <p>{item.content}</p>
                                <div className={styles.triangleUp}></div>
                                <div className={styles.triangleDown}></div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RoadLine;
