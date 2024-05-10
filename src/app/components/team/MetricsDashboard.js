import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MetricsDashboard = () => {
    const [progressValues, setProgressValues] = useState({
        productsSold: 0,
        productsBuilt: 0,
        customerSatisfaction: 0,
        revenueGenerated: 0,
        roi: 0
    });

    const goalValues = {
        productsSold: 17000,
        productsBuilt: 40,
        customerSatisfaction: 100,
        revenueGenerated: "?", // Assuming this should be 100% of a certain value for full completion
        roi: 14
    };

    const incrementValues = {
        productsSold: 15000,
        productsBuilt: 23,
        customerSatisfaction: 94,
        revenueGenerated: 100,
        roi: 11
    };

    const isVisibleRef = useRef(false);
    const sectionRef = useRef(null);

    const startProgressAnimation = () => {
        const interval = setInterval(() => {
            setProgressValues(prevValues => {
                let updated = { ...prevValues };
                let isComplete = true;
                for (const key in updated) {
                    if (updated[key] < incrementValues[key]) {
                        updated[key] += Math.ceil(goalValues[key] * 0.01); // Increment by 1% of goal
                        isComplete = false;
                    }
                }
                if (isComplete) {
                    clearInterval(interval);
                }
                return updated;
            });
        }, 20);
        return () => clearInterval(interval);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries;
                if (entry.isIntersecting && !isVisibleRef.current) {
                    isVisibleRef.current = true;
                    startProgressAnimation();
                }
            },
            { root: null, rootMargin: "0px", threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const progressStyle = buildStyles({
        pathColor: '#2be82b',
        trailColor: '#ffffff',
        backgroundColor: '#20e82b',
        textSize: '13px',
        textColor: '#fff',
        pathTransitionDuration: 0.5,
        textAlign: 'center',
        textX: '50%',
        textY: '50%',
    });

    const data = [
        { label: "Products Sold", value: progressValues.productsSold, target: goalValues.productsSold },
        { label: "Products Built", value: progressValues.productsBuilt, target: goalValues.productsBuilt },
        { label: "Customer Satisfaction", value: progressValues.customerSatisfaction, target: goalValues.customerSatisfaction },
        { label: "Revenue Generated", value: progressValues.revenueGenerated, target: goalValues.revenueGenerated },
        { label: "ROI", value: progressValues.roi, target: goalValues.roi }
    ];

    return (
        <div ref={sectionRef} style={{
            width: "100%",
            padding: "0px 11% 20px 11%",
            borderBottom: "1px solid #585858",
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                backgroundColor:"#0d230e",
                marginLeft:"5%",
                padding:"20px 30px",
                width:"fit-content",
                borderRadius:"0 0 10px 10px"
            }}>
                <p style={{fontWeight:"bold", color:"#fff"}}>Our Stats This Year:</p>
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                padding: "20px 11%",
                backgroundColor: "#000",
                justifyContent: "space-around",
                background: 'transparent',
                borderRadius: '8px',
            }}>
                {data.map((item, index) => (
                    <div key={index} style={{width: 100, padding: "10px"}}>
                        <CircularProgressbar
                            value={(item.value / item.target) * 100}
                            text={item.label === "Revenue Generated" ? "?" : `${item.value.toFixed(0)}`}
                            styles={progressStyle}
                            strokeWidth={8}
                        />
                        <div style={{textAlign: "center", marginTop: "10px", color:"#fff"}}>
                            {item.label} <br/>
                            <small style={{fontSize: '12px', color: '#6c757d'}}>Goal: {item.target}</small>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MetricsDashboard;
