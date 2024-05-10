import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/sections/Products.module.css';
import stylesZ from "../page.module.css";
const Reroll = () => {
    const [currentStep, setCurrentStep] = useState(0); // Tracks the current active step

    const steps = [
        { step: "Step 1:", title: "Mint Your Card", buttonText: "Mint" },
        { step: "Step 2:", title: "Convert it into $PAID Token", buttonText: "Convert" },
        { step: "Step 3:", title: "Try your luck again", buttonText: "Re-Mint" }
    ];

    // Function to handle button click and increment the step
    const handleButtonClick = (stepIndex) => {
        setCurrentStep(stepIndex + 1); // Update to the next step
    };

    return (
        <div className={styles.rerollContainer} id="reroll">
            <div className={stylesZ.backgroundContainer}>
                <Image src="/Back1.png" alt="Background 1" width={700} height={700} className={`${stylesZ.backgroundImage} ${stylesZ.back1}`} />
            </div>
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

            <div className={styles.rerollTexts}>
                <p style={{fontSize:26}}>Got Entry Level Card?</p>
            </div>

            <div style={{margin:"0px 12px"}}>


            <div className={styles.videoContainer}>
                <video className={styles.videoElement} autoPlay loop muted playsInline>
                    <source src="/fizzle.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            </div>

            <p style={{fontSize: 12, color:"#e5e5e5", textAlign:"center", fontStyle:"italic"}}>
                $PAID Token Liquidity Pool will be Setup after FCFS Public Presale Event
            </p>

            <p style={{marginTop:50, marginLeft:8, marginRight:8, textAlign:"center"}}>Swap it (NFT) for $PAID Tokens, then Re-Roll Back to NFT to get a Brand New Randomized Rarity Card</p>

            {/* Step Buttons and Progress Bar at the bottom */}
            <div className={styles.rerollWrapper}>
                <div style={{display: 'flex', justifyContent: 'space-around', margin: '20px 0', position:"sticky", zIndex:3}}>
                    {steps.map((stepData, index) => (
                        <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <p className={styles.textP}><span style={{fontWeight:"bold", color:"#2be62c", marginRight:6}}>{stepData.step}</span>{stepData.title}</p>
                            <Image
                                src={`/step${index + 1}${currentStep > index ? 'g' : ''}.png`}
                                alt={`Step ${index + 1} Icon`}
                                width={70}
                                height={70}
                            />
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

                <div style={{width: '100%', height: 4, backgroundColor: '#ddd', borderRadius:24}}>
                    <div style={{width: `${(currentStep / steps.length) * 100}%`, height: '100%', backgroundColor: '#2be82b', transition: 'width 0.5s ease-in-out'}} />
                </div>
            </div>

            <div style={{marginTop:36, marginRight:8, marginLeft:8, textAlign:"center"}}>
                  <p style={{fontSize:14}}>Yes, <span style={{color:"#2be82b"}}>from Entry to Emerald</span>, or Emerald back to Entry Level Member Card!</p>
            </div>
        </div>
    );
};

export default Reroll;
