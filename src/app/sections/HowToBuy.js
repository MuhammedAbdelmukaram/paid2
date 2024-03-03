import React from 'react';
import Image from "next/image";
import styles from "./HowToBuy.module.css";

const HowToBuy = () => {
    return (
        <div style={{padding:"20px 10%", marginTop:100}} id="how-to-buy">
            <p style={{fontSize: 38, alignSelf: "flex-start", marginBottom: 40}}>
                How to Buy
            </p>

        <div style={{display:"flex", gap:130, width:"100%", justifyContent:"center", paddingBottom:160, marginTop:130}}>
            <div className={styles.container}>
                <div className={styles.text}>Step 1</div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/PaidGreen.png" // Specify the path to your image
                        alt="Descriptive Alt Text"
                        width={500} // Set your image's width
                        height={300} // Set your image's height

                    />
                </div>
                <div className={styles.text}>Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing
                    because this is dummy text
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.text}>Step 2</div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/PaidGreen.png" // Specify the path to your image
                        alt="Descriptive Alt Text"
                        width={500} // Set your image's width
                        height={300} // Set your image's height
                          />
                </div>
                <div className={styles.text}>Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing
                    because this is dummy text
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.text}>Step 3</div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/PaidGreen.png" // Specify the path to your image
                        alt="Descriptive Alt Text"
                        width={500} // Set your image's width
                        height={300} // Set your image's height
                       />
                </div>
                <div className={styles.text}>Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing
                    because this is dummy text
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.text}>Step 4</div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/PaidGreen.png" // Specify the path to your image
                        alt="Descriptive Alt Text"
                        width={500} // Set your image's width
                        height={300} // Set your image's height
                    />
                </div>
                <div className={styles.text}>Lorem Ipsum sit amet dolor et alas doasr fie alt coin is very cool thing
                    because this is dummy text
                </div>
            </div>
        </div>

        </div>
    );
};

export default HowToBuy;