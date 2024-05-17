"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import styles from "./apply.module.css";
import useMousePosition from "../hooks/useMousePosition"; // Adjust the import path accordingly
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { TwitterShareButton } from "react-share";
import LoadingScreen from "@/app/components/LoadingScreen"; // Ensure this component exists

const PageContent = () => {
    const { x, y } = useMousePosition(); // Get mouse position
    const router = useRouter(); // Set the query state
    const searchParams = useSearchParams(); // Search for the query state
    const { data: session, status } = useSession(); // Get the Auth State
    const step = searchParams.get("step"); // Get step query state
    const cursorRef = useRef(null); // Ref for the custom cursor
    const [showSteps, setShowSteps] = useState(false); // Controls the visibility of the steps
    const [currentStep, setCurrentStep] = useState(Number(step) || 1); // Tracks the current active step
    const [finishedSteps, setFinishedSteps] = useState([]); // Tracks the finished steps
    const [formData, setFormData] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        textArea: "",
    });
    const [generatedImageSrc, setGeneratedImageSrc] = useState(null); // Stores the generated image src

    // Set or Update the Query Parameters
    const createQueryString = (name, value) => {
        const params = new URLSearchParams();
        params.set(name, value);

        return params.toString();
    };

    console.log(session);

    // Effect to update the cursor position directly
    useEffect(() => {
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
    }, [x, y]);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "textArea" && value.length > 300) return; // Limit textarea to 300 characters
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/apply?" + createQueryString("step", "2"));
        setFinishedSteps([...finishedSteps, 1]);
        setCurrentStep(2);
    };

    // Handle navigation to step 3
    const handleNextStep = async () => {
        if (status === "authenticated") {
            router.push("/apply?" + createQueryString("step", "3"));
            setFinishedSteps([...finishedSteps, 2]);
            setCurrentStep(3);
        } else {
            await signIn("twitter", { callbackUrl: "/apply?step=2" });
        }
    };

    // Handle reset
    const handleReset = () => {
        setCurrentStep(1);
        setFinishedSteps([]);
        setFormData({
            input1: "",
            input2: "",
            input3: "",
            input4: "",
            textArea: "",
        });
        setGeneratedImageSrc(null); // Hide the generated image on reset
    };

    // Handle show steps
    const handleShowSteps = () => {
        setShowSteps(true);
        setCurrentStep(1);
        router.push("/apply?" + createQueryString("step", "1"));
    };

    // Handle generate image
    const handleGenerate = async (imgURL) => {
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                body: JSON.stringify({ profileImg: imgURL }),
            });
            const data = await response.json();
            setGeneratedImageSrc(data.imageUrl);
        } catch (error) {
            console.error("Error generating image:", error);
        }
    };

    const fullProfileImageUrl = (url) => {
        return url.replace(/(.*)(\/.*)(_normal|_bigger|_mini)(\.\w+)/, "$1$2$4");
    };

    const handleTestGenerate = async () => {
        try {
            const response = await fetch('/api/testGenerate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to generate image');
            }

            const imageBlob = await response.blob();
            const imageUrl = URL.createObjectURL(imageBlob);

            // Do something with the image URL, e.g., display the image
            console.log('Generated Image URL:', imageUrl);

            // Optionally, you can update the state to display the image
            document.getElementById('generatedImage').src = imageUrl;
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className={styles.main}>
            {!step && !showSteps ? (
                <div className={styles.intro}>
                    <div className={styles.rotatingImage}>
                        <Image src="/PaidGreenCr.png" alt="Intro Image" width={150} height={150} />
                    </div>
                    <div className={styles.introTexts}>
                        <p style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
                            Apply to get <span style={{ color: "#01fb05" }}>$PAID</span>
                        </p>
                        <p className={styles.curateText}>
                            We are curating an Anti Cabal Cabal List <br />
                            that is Guaranteed a $PAIDay at launch
                        </p>
                        <button className={styles.enterButton} onClick={handleShowSteps}>
                            Apply in 30 seconds
                        </button>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.responsiveImage}>
                            <Image
                                src="/applyBanner.png"
                                alt="Responsive Image"
                                layout="responsive"
                                width={700}
                                height={475}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Image
                        src="/PaidGreenCr.png"
                        alt="Intro Image"
                        width={150}
                        height={150}
                        style={{ marginTop: 30 }}
                    />
                    <div className={styles.stepIndicator}>
                        <div
                            className={`${styles.step} ${
                                currentStep === 1 || finishedSteps.includes(1) ? styles.activeStep : styles.inactiveStep
                            }`}
                        ></div>
                        <div
                            className={`${styles.step} ${
                                currentStep === 2 || finishedSteps.includes(2) ? styles.activeStep : styles.inactiveStep
                            }`}
                        ></div>
                        <div
                            className={`${styles.step} ${
                                currentStep === 3 || finishedSteps.includes(3) ? styles.activeStep : styles.inactiveStep
                            }`}
                        ></div>
                    </div>
                    {currentStep === 1 && (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="input1"
                                value={formData.input1}
                                onChange={handleChange}
                                placeholder="Name/Acronym"
                                required
                            />
                            <input
                                type="text"
                                name="input2"
                                value={formData.input2}
                                onChange={handleChange}
                                placeholder="Occupation/Work"
                                required
                            />
                            <input
                                type="text"
                                name="input3"
                                value={formData.input3}
                                onChange={handleChange}
                                placeholder="What was your biggest PAIDAY ever?"
                                required
                            />
                            <input
                                type="text"
                                name="input4"
                                value={formData.input4}
                                onChange={handleChange}
                                placeholder="What did get you PAID most recently?"
                                required
                            />
                            <div className={styles.textAreaWrapper}>
                                <textarea
                                    name="textArea"
                                    value={formData.textArea}
                                    onChange={handleChange}
                                    placeholder="Why should you Get Paid?"
                                    required
                                />
                                <div className={styles.charCount}>{formData.textArea.length}/300</div>
                            </div>
                            <button type="submit" className={styles.button2}>
                                Dear button, PLEASE GET ME PAID
                            </button>
                        </form>
                    )}
                    {currentStep === 2 && (
                        <div className={styles.stepTwo}>
                            <button onClick={handleNextStep} disabled={status === "authenticated"} className={styles.connectButton}>
                                {status === "authenticated" ? "X/ Twitter Linked" : "Link X/ Twitter"}
                            </button>
                            <input
                                type="text"
                                name="input1"
                                className={styles.stepTwoInput}
                                value={formData.input1}
                                onChange={handleChange}
                                placeholder="Solana Walled Address"
                                required
                            />
                            <button onClick={handleNextStep} className={styles.button2}>Dear Button, WISH ME LUCK</button>
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className={styles.stepThree}>
                            <p>Congratulations! You have completed the steps.</p>
                            <button onClick={() => handleGenerate(fullProfileImageUrl(session.user.image))}>
                                Generate
                            </button>

                        </div>
                    )}
                </>
            )}
            {generatedImageSrc && (
                <div className={styles.generatedImageContainer}>
                    <img src={generatedImageSrc} alt="Generated" className={styles.generatedImage} />
                    <TwitterShareButton
                        url={generatedImageSrc}
                        title="This is a placeholder text which I will change later!"
                        color="green"
                    >
                        <button style={{ padding: "0.5rem" }}>Share on Twitter</button>
                    </TwitterShareButton>
                </div>
            )}
            {/*<div
                ref={cursorRef}
                className={styles.customCursor}
                style={{transform: `translate3d(${x}px, ${y}px, 0)`}}
            >
                <Image src="/cursor1.png" alt="Custom Cursor" width={50} height={50}/>
            </div>*/}
        </div>
    );
};

const Page = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <PageContent />
        </Suspense>
    );
};

export default Page;
