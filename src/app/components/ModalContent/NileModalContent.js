import { useState } from "react";
import styles from "./taste.module.css"; // Assume similar CSS rules as taste.module.css

const NileModalContent = ({ onClose }) => {
    const [buttonText, setButtonText] = useState("HELL YEAH!");

    const handleClick = () => {
        setButtonText("Much Appreciated");
        setTimeout(() => {
            onClose();  // Automatically close the modal after 2 seconds
        }, 1500);
    };

    return (
        <div style={{ color: "#000" }}>
            <h2>Amazon of Web3</h2>
            <p style={{ marginBottom: 14, marginTop: 20 }}>
                Experience the future of e-commerce on the blockchain with exclusive Solana-based products.
            </p>
            <img src="/N1.png" alt="Nile Logo" style={{ width: "100%", height: "auto" }} />
            <div className={styles.button} onClick={handleClick}>
                <p style={{ fontSize: 14, fontWeight: "bold" }}>{buttonText}</p>
            </div>
        </div>
    );
};

export default NileModalContent;
