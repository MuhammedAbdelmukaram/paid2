import {useState} from "react";
import styles from "./taste.module.css"
const TasteTheChartsModalContent = ({ onClose }) => {
    const [buttonText, setButtonText] = useState("HELL YEAH!");

    const handleClick = () => {
        setButtonText("Much Appreciated");
        setTimeout(() => {
            onClose();  // Automatically close the modal after 2 seconds
        }, 1500);
    };

    return (
        <div style={{color:"#000"}}>
            <h2>Taste the Charts</h2>
            <p style={{marginBottom:14, marginTop:20}}>
                Explore the ultimate snacks for cryptocurrency traders and blockchain enthusiasts. Perfect for long trading sessions!
            </p>
            <img src="/DefuelBanner.png" alt="Defuel Logo" style={{width:"100%", height:"auto"}}/>
            <div className={styles.button}
                 onClick={handleClick}>
                <p style={{fontSize:14, fontWeight:"bold"}}>{buttonText}</p>
            </div>
        </div>
    );
};

export default TasteTheChartsModalContent;