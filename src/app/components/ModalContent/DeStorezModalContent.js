import { useState } from "react";
import styles from "./taste.module.css"; // Assume similar CSS rules as taste.module.css

const DeStorezModalContent = ({ onClose }) => {
    const [buttonText, setButtonText] = useState("HELL YEAH!");

    const handleClick = () => {
        setButtonText("Much Appreciated");
        setTimeout(() => {
            onClose();  // Automatically close the modal after 2 seconds
        }, 1500);
    };

    return (
        <div style={{ color: "#000" }}>
            <h2>Make your Store</h2>
            <p style={{ marginBottom: 14, marginTop: 20 }}>
                Build your e-commerce store on the blockchain and accept payments in various cryptocurrencies. Detailed customization and hassle-free fulfillment let you focus on creating while we handle the rest.
            </p>
            <img src="/DS2.png" alt="Destorez Logo" style={{ width: "100%", height: "auto" }} />
            <div className={styles.button} onClick={handleClick}>
                <p style={{ fontSize: 14, fontWeight: "bold" }}>{buttonText}</p>
            </div>
        </div>
    );
};

export default DeStorezModalContent;
