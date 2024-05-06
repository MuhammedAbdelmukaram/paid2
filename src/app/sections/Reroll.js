import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/sections/Products.module.css';

const Reroll = () => {
    const [currentStep, setCurrentStep] = useState(0); // Tracks the current active step

    const steps = [
        { step:"Step 1:", title: "Mint Your Card", buttonText: "Mint" },
        { step:"Step 2:", title: "Convert it into $PAID Token", buttonText: "Convert" },
        { step:"Step 3:", title: "Try your luck again", buttonText: "Re-Mint" }
    ];

    // Function to handle button click and increment the step
    const handleButtonClick = (stepIndex) => {
        setCurrentStep(stepIndex + 1); // Update to the next step
    };

    return (
        <div className={styles.rerollContainer} id="reroll">
            <div className={styles.headingSection}>
                <Image
                    src="/whitelogo.png"
                    alt="Copy Icon"
                    width={76}
                    height={76}
                    priority
                />
                <p className={styles.heading}>RE ROLL</p>
                <p className={styles.subHeading}>Enabled by SPL 404 & Mutantmon</p>
            </div>

            <div style={{textAlign:"center", width:"40%", marginTop:26, display:"flex", flexDirection:"column", gap:14, fontSize:16}}>
                <p style={{fontSize:26}}>Got the Entry Level Card?</p>
                <p>Swap it (NFT) for $PAID Tokens, then Re-Roll Back to NFT to get a Brand New Randomized Rarity Card</p>
                <p>Yes, from Gold to Diamond, or Diamond back to Entry Level Member Card!</p>

            </div>

            <div className={styles.videoContainer}>
                <video className={styles.videoElement} autoPlay loop muted playsInline>
                    <source src="/fizzle.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <p style={{fontSize: 12, color:"#2be62c"}}>
                $PAID Token Liquidity Pool will be Setup after FCFS Public Presale Event
            </p>


            {/* Step Buttons and Progress Bar at the bottom */}
            <div style={{marginTop: 20, width: "50vw"}}>
                <div style={{display: 'flex', justifyContent: 'space-around', margin: '20px 0'}}>
                    {steps.map((stepData, index) => (
                        <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <p style={{marginBottom:12}}><span style={{fontWeight:"bold", color:"#2be62c", marginRight:6}}>{stepData.step}</span>{stepData.title}</p>
                            <Image src={`/step${index + 1}.png`} alt={`Step ${index + 1} Icon`} width={70} height={70} />
                            <div
                                onClick={() => handleButtonClick(index)}
                                disabled={currentStep < index}
                                className={currentStep > index ? styles.activeButton : styles.stepButton}
                            >
                                {stepData.buttonText}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{width: '100%', height: 4, backgroundColor: '#ddd'}}>
                    <div style={{width: `${(currentStep / 3) * 100}%`, height: '100%', backgroundColor: '#2be82b', transition: 'width 0.5s ease-in-out'}} />
                </div>
            </div>

        </div>
    );
};

export default Reroll;
